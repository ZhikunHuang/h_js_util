class PubConst{
    /**
     * mail address RegExp
     */
    static EmailReg : RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    /**
     * pwd 数字、字母、特殊符号、大写字母
     */
    static PwdReg: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
}