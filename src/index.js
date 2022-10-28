var CommonFunc = /** @class */ (function () {
    function CommonFunc() {
    }
    CommonFunc.prototype.IsEmail = function (mailStr) {
        return PubConst.EmailReg.test(mailStr);
    };
    return CommonFunc;
}());
var common = new CommonFunc();
module.exports = common;
var PubConst = /** @class */ (function () {
    function PubConst() {
    }
    /**
     * mail address RegExp
     */
    PubConst.EmailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    /**
     * pwd 数字、字母、特殊符号、大写字母
     */
    PubConst.PwdReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return PubConst;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGdW5jL0Z1bmN0aW9ucy50cyIsIkZ1bmMvaW5kZXgudHMiLCJQdWIvUHViQ29uc3QudHMiLCJQdWIvUHViRW51bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUFBO0lBb0lBLENBQUM7SUFuSVUsNEJBQU8sR0FBZCxVQUFlLE9BQWU7UUFDMUIsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBaUlMLGlCQUFDO0FBQUQsQ0FBQyxBQXBJRCxJQW9JQztBQ3BJRCxJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0FBQzlCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFBO0FDRHZCO0lBQUE7SUFTQSxDQUFDO0lBUkc7O09BRUc7SUFDSSxpQkFBUSxHQUFZLGtDQUFrQyxDQUFDO0lBQzlEOztPQUVHO0lBQ0ksZUFBTSxHQUFXLHFEQUFxRCxDQUFDO0lBQ2xGLGVBQUM7Q0FBQSxBQVRELElBU0MifQ==