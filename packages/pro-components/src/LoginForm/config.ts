export const loginFormEmits = () =>
  ({
    /**
     * 提交
     * @param model 表单参数
     * @param remember 是否记住密码
     */
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    submit: (model: LoginFormModel, remember: boolean) => true,
    /**
     * 忘记密码点击回调
     */
    forget: () => true,
    /**
     * 注册点击回调
     */
    register: () => true,
  }) as const
