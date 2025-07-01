// 校验登录规则密码只可以输入数字和小于六位数字
// export const validatePassword = () => {
//   return (rule, value, callback) => {
//     // 定义正则表达式，匹配数字和小于六位数字
//     const regPassword = /^[\d]{0,5}$/;
//     if (!value || !regPassword.test(value)) {
//       callback(new Error("密码不能为空和小于六位数字!"));
//     } else {
//       callback();
//     }
//   };
// };

// 校验登录规则密码不能为空和小于六位数字
export const validatePassword = () => {
    return (rule, value, callback) => {
        if (!value) {
            callback(new Error("密码不能为空和小于六位数字!"));
        } else {
            callback();
        }
    };
};

//修改密码表单校验
import { ref } from "vue";

export const useValidation = () => {
    const rules = ref({
        username: [
            { required: true, message: "请输入用户名", trigger: "blur" },
            { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" },
        ],
        password: [
            { required: true, message: "请输入密码", trigger: "blur" },
            { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" },
        ],
        confirmPassword: [
            { required: true, message: "请再次输入密码", trigger: "blur" },
            { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" },
            {
                validator: (rule, value, callback) => {
                    if (value !== form.confirmPassword) {
                        callback(new Error("两次输入的密码不一致"));
                    } else {
                        callback();
                    }
                },
                trigger: "blur",
            },
        ],
        email: [
            { required: true, message: "请输入邮箱地址", trigger: "blur" },
            {
                type: "email",
                message: "请输入正确的邮箱地址",
                trigger: ["blur", "change"],
            },
        ],
        phone: [
            { required: true, message: "请输入手机号码", trigger: "blur" },
            {
                pattern: /^1\d{10}$/,
                message: "请输入正确的手机号码",
                trigger: ["blur", "change"],
            },
        ],
    });

    return {
        rules,
    };
};
