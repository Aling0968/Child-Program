export function CreateRandomInt()
{
    return Math.floor(Math.random() *100);
}

export function secondsToTimeStr(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;

    // 格式化时分秒，确保每个部分都是两位数字
    const formattedHours = hours.toString().padStart(2, '0');
    var formattedMinutes = minutes.toString().padStart(2, '0');
    var formattedSeconds = remainingSeconds.toString().padStart(2, '0');

    // 构建时分秒字符串
    var timeStr = formattedHours + '小时' + formattedMinutes + '分' + formattedSeconds+ '秒';

    return timeStr;
}