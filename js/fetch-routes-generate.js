// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
const yaml = require('js-yaml');
 
function convertRoutesVirtual(listContent) {
  const filterListRoutes = listContent.flat().filter((cate) => cate !== undefined && cate?.text !== null && cate?.text.trim() !== '')
  let listRoutes = filterListRoutes.map((cate) => cate?.text?.toLowerCase().split(' ').join('-'));
  listRoutes = [...new Set(listRoutes)];
  return listRoutes;
}
 
function generateRoutes() {
  const domainName = process.cwd();
 
  const getNestedFiles = async (dir) => {
    return new Promise((resolve, reject) => {
      fs.readdir(`${domainName}/content/` + dir, async (_err, _files) => {
        if (_err) return reject(_err);
 
        let folders = _files?.filter(file => !file?.includes(".yml"));
        let notFolders = _files?.filter(file => file?.includes(".yml"));
        let nestedFiles = [];
        let listCate = [];
        let listTags = [];
        // Đọc thư mục con (folders) không đồng bộ
        await Promise.all(folders.map(async folder => {
          const filesInFolder = await getNestedFiles(dir + "/" + folder);
          nestedFiles.push(...filesInFolder);
        }));
 
        // Đọc các file YAML
        const readNotFolders = () =>{
          notFolders.map(item => {
            try {
              const yamlData = fs.readFileSync(`${domainName}/content/${dir}/${item}`, 'utf8');
              const jsonData = yaml.load(yamlData);
              if ('publish' in jsonData ) {
                if (jsonData.publish) {
                  listCate.push(jsonData.category);
                  listTags.push(jsonData.tags);
                }else{
                  var index = notFolders.indexOf(item);
                  if (index > -1) {
                    notFolders.splice(index, 1);
                  }
                  readNotFolders()
                }
              }
    
            } catch (err) {
              console.error(err);
            }
          });
        }
        readNotFolders()
 
        // Chuyển đổi routes từ category và tags
        listCate = convertRoutesVirtual(listCate);
        listTags = convertRoutesVirtual(listTags);
 
        // Thêm các file YAML vào danh sách
        nestedFiles.push(...notFolders.map(file => dir + "/" + file));

        // Thêm category và tags vào nestedFiles
        listCate.forEach((cate) => nestedFiles.push(dir + "/" + 'category/' + cate + '.yml'));
        listTags.forEach((tags) => nestedFiles.push(dir + "/" + 'tags/' + tags + '.yml'));
 
        resolve(nestedFiles);
      });
    });
  };
 
  // Đọc thư mục /content
  fs.readdir(`${domainName}/content`, async (err, files) => {
    if (err) {
      console.log(err);
      return;
    }
 
    let folders = files?.filter(file => !file?.includes(".yml"));
    let nestedFiles = [];
 
    // Đọc tất cả các thư mục cấp cao nhất không đồng bộ
    await Promise.all(folders.map(async folder => {
      const filesInFolder = await getNestedFiles(folder);
      nestedFiles.push(...filesInFolder);
    }));
 
    // Lọc các file YAML
    files = [...files, ...nestedFiles]?.filter(file => file.includes(".yml"));
 
    // Tạo routes từ danh sách file YAML
    const routes = files.map(file => {
      return '/' + file
        .replace('index.yml', '')
        .replace('.yml', '');
    });
 
    // Đọc và sửa file nuxt.config.ts
    fs.readFile(`${domainName}/nuxt.config.ts`, 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let replaced = data.replace(/routes: \[.*\]/, `routes: ${JSON.stringify(routes)}`).replaceAll('\"', '\'');
        let replace2 = replaced.replace(`dirs: ['~/components']`, `dirs: ['~/components', '~/plugin']`);
 
        // Write result back to nuxt.config.ts
        fs.writeFile(`${domainName}/nuxt.config.ts`, replace2, 'utf-8', function (err) {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  });
}

generateRoutes()

// module.exports = {
//   generateRoutes
// };
 