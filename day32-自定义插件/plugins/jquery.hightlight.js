//闭包限定命名空间
(function ($) {
    var defaluts = {
        foreground: 'red',
        background: 'yellow'
    };


    function validate(opt){
        return  (!opt || (opt && typeof opt == "object")) ? true : false;
    }

    $.fn.extend({
        "highLight": function (options) {

            if (!validate(options)){
                return this;
            }
            
            var opts = $.extend({}, defaluts, options); 

            return this.each(function (index, elem){
                var $this = $(this);
                $this.css({
                    backgroundColor: opts.background,
                    color: opts.foreground
                });

                var html = $this.html();
                $this.html($.fn.highLight.strong(html));
            });

        }
    });


    $.fn.highLight.strong = function(str){
        return "<strong>" + str + "</strong>";
    }

})(jQuery);