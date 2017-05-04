/**
 * Created by 007 on 2017/3/31.
 */

(function($){
/*    $.fn.setColor = function(color){

        // 为了保证仍然支持jquery的链式调用，那么必须返回对象本身
        //注意此处的this  其实就是元素的jquery对象,不要当成DOM对象
         return this.css("color", color );
    };*/


    $.fn.extend({
        setTextColor: function(color){
            return this.css("color", color );
        },
        setBackgroundColor: function(color){
            return this.css("backgroundColor", color );
        },
        setBorderColor: function(color){
            return this.each(function(index, elem){
                //此处的this是遍历到的对应的DOM对象
                var $this = $(this);
                $this.css("borderColor", color);
            });
        }
    });
})(jQuery);
