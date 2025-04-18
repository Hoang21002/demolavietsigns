const fs = require("fs");
// read theme color from _data/site.json
fs.readFile("./data/theme.json", "utf8", function (err, dataFile) {
  if (err) {
    console.log(err);
    return;
  }

  // parse file to JSON so that the variables can be accessed
  dataFile = JSON.parse(dataFile);

  // TODO: Check if dataFile.primary_theme_color is set
  // Open variables.scss and search/replace "$theme: ..." with color from data file
  fs.readFile(
    "./assets/style/_variables.scss",
    "utf-8",
    function (err, scssFile) {
      if (err) {
        console.log(err);
        return;
      }

      var replaced = scssFile;

      // Change the variables to whatever was set in the data file
      if (dataFile.color_primary) {
        const replacementString = dataFile.color_primary;
        replaced = replaced.replace(
          /\--color-primary: .*/g,
          "--color-primary: " + replacementString + ";"
        );
      }
      if (dataFile.color_text) {
        const replacementString = dataFile.color_text;
        replaced = replaced.replace(
          /\--color-text: .*/g,
          "--color-text: " + replacementString + ";"
        );
      }
      if (dataFile.color_base) {
        const replacementString = dataFile.color_base;
        replaced = replaced.replace(
          /\--color-base: .*/g,
          "--color-base: " + replacementString + ";"
        );
      }
      // if (dataFile.anchor_color) {
      //     const replacementString = dataFile.anchor_color;
      //     replaced = replaced.replace(/\$color-anchor: .*/g, ('$color-anchor: ' + replacementString + ';'));
      // }
      // if (dataFile.background_effects_color) {
      //     const replacementString = dataFile.background_effects_color;
      //     replaced = replaced.replace(/\$color-background-effects: .*/g, ('$color-background-effects: ' + replacementString + ';'));
      // }

      // Write result back to variables.scss
      fs.writeFile(
        "./assets/style/_variables.scss",
        replaced,
        "utf-8",
        function (err) {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  );
});
