(function ($) {

    /**
     * Form validation class.
     * @constructor
     */
    function FormValidation() {
        this.forms = $('.cs-forms');
    }

    /**
     * Enable form validation.
     */
    FormValidation.prototype.init = function () {

        if (this.forms.length > 0) {

            for (var i = 0; i < this.forms.length; i++) {

                var form = $(this.forms[i]);

                if (typeof form.parsley === 'function') {

                    var settings = {
                        errorClass: 'field-error',
                        successClass: 'field-success',
                        errorsWrapper: '<ul class="cs-forms__error-list"></ul>',
                        errorTemplate: '<li class="cs-forms__error"></li>'
                    };

                    form.parsley(settings).on('field:validated', function () {

                        var valid = $('.parsley-error').length === 0;
                        var currentForm = this.$element.closest('form');

                        currentForm.find('.form-warning').toggleClass('is-hidden', valid);
                    });

                } else {
                    console.error('Parsley vendor script not loaded.');
                }
            }
        }
    };

    // enable form validation
    var formValidation = new FormValidation();
    formValidation.init();

    /**
     * Form upload class.
     * @constructor
     */
    function FormUpload() {

    }

    /**
     * Initialize upload field.
     */
    FormUpload.prototype.init = function () {

        var that = this;

        that.form = $('.cs-forms');
        that.formInput = that.form.find('input[type="file"]');
        that.fileField = that.form.find('.cs-forms-file');

        if (that.isAdvancedUpload) {
            that.fileField.addClass('has-advanced-upload');
        }

        that.fileField.on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });

        that.fileField.on('dragover dragenter', function () {
            $(this).addClass('is-dragover');
        });

        that.fileField.on('dragleave dragend drop', function () {
            $(this).removeClass('is-dragover');
        });

        that.formInput.on('change', function (e) {
            that.handleFiles(e.target.files);
        });

        that.fileField.on('drop', function (e) {
            that.handleFiles(e.originalEvent.dataTransfer.files);
        });
    };

    /**
     * Handle files.
     *
     * @param droppedFiles
     * @returns {boolean}
     */
    FormUpload.prototype.handleFiles = function (droppedFiles) {

        var files = [];
        var ajaxData = new FormData();
        var fileFieldValue = this.form.find('.cs-forms-file__file-value');

        if (this.form.hasClass('is-uploading'))
            return false;

        this.form.addClass('is-uploading').removeClass('is-error');

        if (droppedFiles) {
            $.each(droppedFiles, function (i, file) {
                ajaxData.append(this.formInput.attr('name'), file);
                files.push(ajaxData);
            }.bind(this));
        }
        ajaxData.append('action', 'cs_forms3_upload');
        ajaxData.append('field_name', fileFieldValue.attr("name"));

        this.uploadFiles(ajaxData);
    };

    /**
     * Checks if advanced upload is supported by the browser.
     */
    FormUpload.prototype.isAdvancedUpload = function () {
        var div = document.createElement('div');
        return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
    }();

    /**
     * Upload files to Wordpress backend.
     *
     * @param {object} ajaxData
     */
    FormUpload.prototype.uploadFiles = function (ajaxData) {

        var self = this;

        if (this.isAdvancedUpload) { // ajax for modern browsers
            $.ajax({
                url: '/wordpress/wp-admin/admin-ajax.php',
                type: 'POST',
                data: ajaxData,
                cache: false,
                dataType: "json",
                contentType: false,
                processData: false,
                complete: function () {
                    self.form.removeClass('is-uploading');
                },
                success: function (response) {
                    self.addFilesToScreen(response.result);
                    self.addAttachmentToField(response.result);
                },
                error: function (data) {
                    console.error('Failed to process image upload:', data);
                }
            });
        } else {
            // ajax for legacy browsers
            console.warn('Your browser does not support modern uploading...')
        }
    };

    /**
     * Add files to screen.
     *
     * @param {object} files
     */
    FormUpload.prototype.addFilesToScreen = function (files) {

        var target = this.form.find('.cs-forms-file__result');
        for (var i = 0; i < files.length; i++) {

            if (files[i]['file']['path'] !== '') {
                var img = '<img style="width: 100px; height: auto;" src="' + files[i]['file']['path'] + '" />';
            }

            var message = '<div class="cs-forms-file__message">' +
                '<span class="cs-forms-file__name">' + files[i]['file']['name'] + '</span>' +
                '<span class="cs-forms-file__message-text">' + files[i]['message'] + '.<span>' +
                '</div>';

            target.append(img);
            target.append(message);

            if (!target.hasClass('is-result')) {
                target.addClass('is-result');
            }
        }
    };

    /**
     * Here we attach the attachment ID's to the file upload field.
     *
     * @param {object} files
     */
    FormUpload.prototype.addAttachmentToField = function (files) {

        var fileFieldValue = $('.cs-forms-file__file-value');
        var ids = [];

        for (var i = 0; i < files.length; i++) {
            ids.push(files[i]['file']['attachment_id']);
        }

        // @todo support attaching multiple files to form
        //fileFieldValue.val(JSON.stringify(ids));
        fileFieldValue.val(ids[ids.length - 1]);
    };

    // initialize form uploading
    var formUpload = new FormUpload();
    formUpload.init();

})(jQuery);