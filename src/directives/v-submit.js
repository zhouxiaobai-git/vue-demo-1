
/**
 * 表单提交
 * ----------------------------------
 * 在表单有不合法字段的时候提示，
 * 如果表单合法了再触发提交方法
 * 
 * @examples
 * <form v-submit='doSubmit'></form>
 * 
 * @author yelloxing
 * @date 2020年8月11日
 */

import $$ from 'image2d';

export default {
    inserted(el, binding) {

        let doSubmit = binding.value;

        $$(el).bind('submit', (event) => {
            $$.stopPropagation(event);
            $$.preventDefault(event);

            if ((" " + el.getAttribute('class') + " ").indexOf(' ep-valid ') > -1) {
                doSubmit();
            } else {
                // alert('表单非法！');

                // 获取第一个非法的输入框
                let invalidDiv = $$('.ep-invalid', el)[0];

                // 获取输入name
                let inputName = invalidDiv.previousElementSibling.innerText;
                alert("[" + inputName + "]输入非法！");
                $$('input', invalidDiv)[0].focus();

            }

        });

    }
};