$(function () {
  function extractNumbers(str) {
    return (str || "").replace(/\D/g, "").slice(0, 4);
  }

  function formatDisplay(numStr) {
    if (numStr.length <= 2) return numStr;
    return numStr.slice(0, 2) + ":" + numStr.slice(2, 4);
  }

  function toMinutes(str) {
    const nums = extractNumbers(str);

    if (nums.length !== 4) return null;

    const h = parseInt(nums.slice(0, 2), 10);
    const m = parseInt(nums.slice(2, 4), 10);

    if (isNaN(h) || isNaN(m)) return null;

    return h * 60 + m;
  }

  function toTime(mins) {
    mins = (mins + 1440) % 1440;

    const h = String(Math.floor(mins / 60)).padStart(2, "0");
    const m = String(mins % 60).padStart(2, "0");

    return h + ":" + m;
  }

  function calculateResult() {
    const end = toMinutes($("#endTime").val());
    const req = toMinutes($("#reqTime").val());

    if (end === null || req === null) {
        $("#resultText").text("--:--");
        return;
    }

    if (req > end) {
        $("#resultText").text("요청시간이 종료시간보다 큽니다");
        return;
    }

    const result = end - req;
    $("#resultText").text(toTime(result));
    }

  

  $(".time-input").on("input", function () {
    const nums = extractNumbers($(this).val());
    $(this).val(formatDisplay(nums));

    if (nums.length === 4) {
      const inputs = $(".time-input");
      const index = inputs.index(this);

      if (index < inputs.length - 1) {
        setTimeout(() => {
            inputs.eq(index + 1).focus();
        }, 50);
      }
    }

    $("#resetBtn").on("click", function () {
        $("#endTime").val("");
        $("#reqTime").val("");
        $("#resultText").text("--:--");
        $("#resultText").css("color", "#2563eb");
        $("#endTime").focus();
    });

    calculateResult();
  });
});

