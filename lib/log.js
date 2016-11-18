var log = null;
var silent = false;

function getLog() {
  if (log) {
    return log;
  } else {
    log = {
      log: function (string) {
        if (!silent)
          console.log("log info in agile-idm-entity-storage: " + string);
      },
      debug: function (string) {
        if (!silent)
          console.log("debug info in agile-idm-entity-storage: " + string);
      },
    };
    return log;
  }
}
module.exports = getLog();
