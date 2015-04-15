Ext.define('Ext.example.Manager', {
    singleton: true,

    constructor: function () {
        var stepId = this.hasOption('id');

        if (!stepId) {
            return;
        }

        document.title = stepId;

        Ext.Loader.loadScript('Unemployment.js');
        Ext.Loader.loadScript(stepId + '.js');
    },

    hasOption: function (opt) {
        var s = window.location.search;
        var re = new RegExp('(?:^|[&?])' + opt + '(?:[=]([^&]*))?(?:$|[&])', 'i');
        var m = re.exec(s);

        return m ? (m[1] === undefined ? true : m[1]) : false;
    }

});