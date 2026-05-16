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

    if (h > 23 || m > 59) return null;

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
      $("#minusResult").text("--:--");
      $("#plusResult").text("--:--");
      return;
    }

    if (req > end) {
      $("#minusResult").text("오류");
    } else {
      $("#minusResult").text(toTime(end - req));
    }

    $("#plusResult").text(toTime(end + req));
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

    calculateResult();
  });

  $("#resetBtn").on("click", function () {
    $("#endTime").val("");
    $("#reqTime").val("");
    $("#minusResult").text("--:--");
    $("#plusResult").text("--:--");
    $("#endTime").focus();
  });

  const resultBox = document.querySelector(".result-box");
  const initialHeight = window.visualViewport
    ? window.visualViewport.height
    : window.innerHeight;

  function adjustForKeyboard() {
    if (!window.visualViewport) return;

    const currentHeight = window.visualViewport.height;
    const keyboardHeight = initialHeight - currentHeight;

    const activeEl = document.activeElement;
    const isInputFocused =
      activeEl &&
      (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA");

    if (keyboardHeight > 120 || isInputFocused) {
      const moveHeight = keyboardHeight > 120 ? keyboardHeight : 300;
      resultBox.style.bottom = (moveHeight - 40) + "px";
    } else {
      resultBox.style.bottom = "30px";
    }
  }

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", adjustForKeyboard);
  }

  document.addEventListener("focusin", () => {
    setTimeout(adjustForKeyboard, 50);
  });

  document.addEventListener("focusout", () => {
    setTimeout(() => {
      const activeEl = document.activeElement;
      const stillFocused =
        activeEl &&
        (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA");

      if (!stillFocused) {
        resultBox.style.bottom = "30px";
      }
    }, 200);
  });

  adjustForKeyboard();
});