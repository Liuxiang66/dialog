
var Dialog = (function(window) {
  var Dialog = function(opts) {
    return new Dialog.fn.init(opts);
  };

  Dialog.fn = Dialog.prototype = {
      constructor: Dialog,
      init: function(opts) {
        this.appendHtml();
        this.showDialog(opts);
      },
      // 初始化打卡日历
      appendHtml: function() {
          var html = '';
          html += '<div id="temp-dialog" class="temp-dialog" style="display: none;">\n';
          html += '  <div class="temp-dialog-wrapper">\n';
          html += '    <div class="temp-dialog-header">\n';
          html += '      <div id="message-dialog-title" class="message-dialog-title" style="display: none;">标题</div>\n';
          html += '    </div>\n';

          html += '    <div class="temp-dialog-content">\n';
          html += '      <div id="content-top-words" class="content-top-words" style="display: none;">文字</div>\n';
          html += '      <div id="content-textarea-wrapper" class="content-textarea" style="display: none;">\n';
          html += '        <textarea id="content-textarea"></textarea>\n';
          html += '      </div>\n';
          html += '      <div id="content-img-wrapper" class="content-img-wrapper"  style="display: none;">\n';
          html += '        <div id="content-img-container" class="content-img-container">\n';
          html += '          <img id="content-img" src="" alt="">\n';
          html += '        </div>\n';
          html += '      </div>\n';
          html += '      <div id="content-bottom-words" class="content-bottom-words" style="display: none;">文字</div>\n';
          html += '    </div>\n';

          html += '    <div class="temp-dialog-footer">\n';
          html += '      <div id="temp-dialog-one-btn" class="temp-dialog-one-btn" style="display: none;">\n';
          html += '        <div id="one-btn" class="one-btn">确定</div>\n';
          html += '      </div>\n';
          html += '      <div id="temp-dialog-two-btn" class="temp-dialog-two-btn" style="display: none;">\n';
          html += '        <div id="two-btn-left" class="two-btn-left">取消</div>\n';
          html += '        <div id="two-btn-right" class="two-btn-right">确定</div>\n';
          html += '      </div>\n';
          html += '    </div>\n';
          html += '  </div>\n';
          html += '</div>\n';
          $('body').append(html);

          $('.temp-dialog').click(function(e) {
              if ($(e.target).hasClass('temp-dialog')) {
                Dialog.fn.hideDialog();
              }
          });
      },  

      showDialog: function(obj){
          // 阻止画面滚动
          $("body").on("touchmove", function(e) {
              e.preventDefault;
          }, false);

          $('#temp-dialog').show();

          // 如果传送了title，则显示并赋值
          if (obj.title) {
              $('#message-dialog-title').show();
              $('#message-dialog-title').html(obj.title.words);
              $('#message-dialog-title').css(obj.title.style);
          }

          if (obj.contentTopWords) {
              $('#content-top-words').show();
              $('#content-top-words').html(obj.contentTopWords.words);
              $('#content-top-words').css(obj.contentTopWords.style);
          }

          if (obj.contentTextarea) {
              $('#content-textarea-wrapper').show();
              $("#content-textarea").attr('placeholder', obj.contentTextarea.words);
              $("#content-textarea").css(obj.contentTextarea.style);
          }

          if (obj.contentImg) {
              $('#content-img-wrapper').show();
              $('#content-img').attr('src',obj.contentImg.src);
              $('#content-img-container').css(obj.contentImg.style);
              if (!!obj.contentImg.callback && obj.contentImg.callback instanceof Function) {
                  $('#content-img').off('click').on('click', function(e) {
                      obj.contentImg.callback();
                  });
              }
          }

          if (obj.contentBottomWords) {
              $('#content-bottom-words').show();
              $('#content-bottom-words').html(obj.contentBottomWords.words);
              $('#content-bottom-words').css(obj.contentBottomWords.style);
          }

          if (obj.btn) {
              if(obj.btn.isOneBtn){
                $('#temp-dialog-one-btn').show();
                $('#one-btn').css(obj.btn.style);
                if(obj.btn.confirmBtnWords){
                  $('#one-btn').html(obj.btn.confirmBtnWords);
                }
                if (!!obj.btn.callback && obj.btn.callback instanceof Function) {
                  $('#one-btn').off('click').on('click', function(e) {
                      obj.btn.callback($('#content-textarea-wrapper textarea').val());
                  });
                }else{
                  $('#one-btn').off('click').on('click', function(e) {
                      Dialog.fn.hideDialog();
                  });            
                }
              }else{
                $('#temp-dialog-two-btn').show();
                $('#two-btn-right').css(obj.btn.style);
                if(obj.btn.confirmBtnWords){
                  $('#two-btn-left').html(obj.btn.cancelBtnWords);
                }
                if(obj.btn.confirmBtnWords){
                  $('#two-btn-left').html(obj.btn.cancelBtnWords);
                }
              }
          }
      },

      hideDialog: function(){
          $('#temp-dialog').hide();
          $('#message-dialog-title').hide();
          $('#content-top-words').hide();
          $('#content-textarea-wrapper').hide();
          $('#content-img-wrapper').hide();
          $('#content-bottom-words').hide();
          $('#temp-dialog-one-btn').hide();
          $('#temp-dialog-two-btn').hide();
          // 取消绑定touchmove
          $("body").off("touchmove");
        }
  };

  Dialog.fn.init.prototype = Dialog.fn;

  return Dialog;
})();