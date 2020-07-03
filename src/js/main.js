const reportsWidget = {
    options: {
        containerSelector: '.reports',
        template: (
            '{{#.}}' +
                '<article class="reports_item col-4 col-sm-6 col-xs-12">' +
                    '<a href="{{cover}}" target="_blank">' +
                        '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>' +
                    '</a>' +
                    '<footer class="reports_docs">' +
                        '{{#documents}}' +
                            '<h3 class="reports_title">' +
                                '<a href="{{url}}" target="_blank">{{title}} ' + 
                                    '<span>({{file_size}} {{file_type}})' +
                                    '</span>' +
                                '</a>' +
                            '</h3>' +
                        '{{/documents}}' +
                    '</footer>' +
                '</article>' +
            '{{/.}}'
        )
    },

    init: async function() {
        this.renderReports(reportData || []);
    },

    renderReports: async function(reports) {
        const inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();