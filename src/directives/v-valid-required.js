
import $$ from 'image2d';

let getNewClass = function (clazz, addClazzStr) {
    clazz = ' ' + clazz + ' ';

    ['ep-invalid-required', 'ep-invalid', 'ep-valid-required', 'ep-valid'].forEach(tempClazz => {
        clazz = clazz.replace(" " + tempClazz + " ", ' ');
    });

    return clazz.trim() + " " + addClazzStr;

};

let doCheck = function (el, binding) {

    let flag = binding.value;
    if (flag == undefined) flag = true;

    if (flag) {

        let val = el.getElementsByTagName('input')[0].value || "";
        if (val.length > 0) {
            // ep-valid-required ep-valid
            el.setAttribute(
                'class',
                getNewClass(
                    el.getAttribute('class'),
                    'ep-valid-required ep-valid'
                )
            );
        } else {
            // ep-invalid-required ep-invalid
            el.setAttribute(
                'class',
                getNewClass(
                    el.getAttribute('class'),
                    'ep-invalid-required ep-invalid'
                )
            );
        }

    } else {
        // ep-valid-required ep-valid
        el.setAttribute(
            'class',
            getNewClass(
                el.getAttribute('class'),
                'ep-valid-required ep-valid'
            )
        );
    }

    // 更新表单的合法信息
    let formDom = el.parentNode.parentNode;
    let invalidInputs = $$('.ep-invalid', formDom);

    let oralClass = (" " + (formDom.getAttribute('class') || "") + " ").replace('ep-invalid', ' ').replace('ep-valid', ' ');

    if (invalidInputs.length > 0) {
        formDom.setAttribute('class', oralClass.trim() + " ep-invalid");
    } else {
        formDom.setAttribute('class', oralClass.trim() + " ep-valid");
    }

};

/**
 * 校验必输项
 * ----------------------------------
 * v-valid-required='flag<boolean>'
 * 说明：flag为true表示此项必输，如果flag为false,表示此项非必输，
 * 默认flag可以不写，表示true,必输
 */

export default {
    update: doCheck,
    inserted: doCheck
};