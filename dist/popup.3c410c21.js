document.addEventListener('DOMContentLoaded', function() {
    // buttons for extension on/off state
    const extIcon = document.querySelector('.ext-icon');
    const extOffButton = document.getElementById('ext-off');
    const extOnButton = document.getElementById('ext-on');
    const extStatus = document.querySelector('.ext-status');
    // buttons for extension light/dark/system mode
    const modeLightButton = document.getElementById('mode-light');
    const modeDarkButton = document.getElementById('mode-dark');
    const modeSystemButton = document.getElementById('mode-system');
    const modeStatus = document.querySelector('.mode-status');
    // let extEnabled = true;
    // let modeSelected = 'light';
    // Load the initial values from storage
    chrome.storage.sync.get([
        'extEnabled',
        'modeSelected'
    ], function(result) {
        extEnabled = result.extEnabled ?? extEnabled;
        modeSelected = result.modeSelected ?? modeSelected;
        updateExtUI(extEnabled, modeSelected);
    });
    chrome.storage.onChanged.addListener(function(changes, namespace) {
        if (namespace === 'sync') {
            if ('extEnabled' in changes) {
                extEnabled = changes.extEnabled.newValue;
                updateExtUI(extEnabled, modeSelected);
            }
            if (extEnabled && 'modeSelected' in changes) {
                modeSelected = changes.modeSelected.newValue;
                updateExtUI(extEnabled, modeSelected);
            }
        }
    });
    function updateExtUI(extEnabled1, modeSelected1) {
        // update extension on/off buttons
        if (extEnabled1) {
            extOffButton.classList.remove('ext-active');
            extOnButton.classList.add('ext-active');
            extStatus.textContent = 'Extension is enabled.';
            extIcon.style.filter = "grayscale(0)";
            modeLightButton.style.display = 'block';
            modeDarkButton.style.display = 'block';
            modeSystemButton.style.display = 'block';
            modeStatus.style.display = 'block';
        } else {
            extOnButton.classList.remove('ext-active');
            extOffButton.classList.add('ext-active');
            extStatus.textContent = 'Extension is disabled.';
            extIcon.style.filter = "grayscale(1)";
            modeLightButton.style.display = 'none';
            modeDarkButton.style.display = 'none';
            modeSystemButton.style.display = 'none';
            modeStatus.style.display = 'none';
            // always set modeSelected to 'light' when extension is turned off
            modeSelected1 = 'light';
        }
        // update mode buttons
        modeLightButton.classList.remove('mode-active');
        modeDarkButton.classList.remove('mode-active');
        modeSystemButton.classList.remove('mode-active');
        if (modeSelected1 === 'light') {
            modeLightButton.classList.add('mode-active');
            modeStatus.textContent = 'Theme';
            document.documentElement.setAttribute('data-theme', 'light');
        } else if (modeSelected1 === 'dark') {
            modeDarkButton.classList.add('mode-active');
            modeStatus.textContent = 'Theme';
            document.documentElement.setAttribute('data-theme', 'dark');
        } else if (modeSelected1 === 'system') {
            modeSystemButton.classList.add('mode-active');
            modeStatus.textContent = 'Theme';
            // darken popup based on system color scheme
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.setAttribute('data-theme', 'dark');
            else document.documentElement.setAttribute('data-theme', 'light');
        }
    }
    // updates popup when system changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e)=>{
        if (extEnabled && modeSelected === 'system') {
            if (e.matches) document.documentElement.setAttribute('data-theme', 'dark');
            else document.documentElement.setAttribute('data-theme', 'light');
        }
    });
    // button click event handlers
    extOffButton.addEventListener('click', function() {
        chrome.storage.sync.set({
            extEnabled: false
        });
    });
    extOnButton.addEventListener('click', function() {
        chrome.storage.sync.set({
            extEnabled: true
        });
    });
    modeLightButton.addEventListener('click', function() {
        chrome.storage.sync.set({
            modeSelected: 'light'
        });
    });
    modeDarkButton.addEventListener('click', function() {
        chrome.storage.sync.set({
            modeSelected: 'dark'
        });
    });
    modeSystemButton.addEventListener('click', function() {
        chrome.storage.sync.set({
            modeSelected: 'system'
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBZ0MsT0FBTyxFQUMzRCxTQUFTLGVBQWUsQ0FBQyxZQUFZLENBQUMsY0FBYztpQkFFcEQsU0FBUyxlQUFlLENBQUMsWUFBWSxDQUFDLGNBQWM7UUFFeEQ7SUFDRjtJQUVBLG9DQUFvQztJQUNwQyxPQUFPLFVBQVUsQ0FBQyxnQ0FBZ0MsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO1FBQzVFLElBQUksY0FBYyxpQkFBaUI7WUFDakMsSUFBSSxFQUFFLE9BQU8sRUFDWCxTQUFTLGVBQWUsQ0FBQyxZQUFZLENBQUMsY0FBYztpQkFFcEQsU0FBUyxlQUFlLENBQUMsWUFBWSxDQUFDLGNBQWM7O0lBRzFEO0lBRUEsOEJBQThCO0lBQzlCLGFBQWEsZ0JBQWdCLENBQUMsU0FBUztRQUNyQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQUUsWUFBWTtRQUFNO0lBQzlDO0lBRUEsWUFBWSxnQkFBZ0IsQ0FBQyxTQUFTO1FBQ3BDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBRSxZQUFZO1FBQUs7SUFDN0M7SUFFQSxnQkFBZ0IsZ0JBQWdCLENBQUMsU0FBUztRQUN4QyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQUUsY0FBYztRQUFRO0lBQ2xEO0lBRUEsZUFBZSxnQkFBZ0IsQ0FBQyxTQUFTO1FBQ3ZDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBRSxjQUFjO1FBQU87SUFDakQ7SUFFQSxpQkFBaUIsZ0JBQWdCLENBQUMsU0FBUztRQUN6QyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQUUsY0FBYztRQUFTO0lBQ25EO0FBQ0YiLCJzb3VyY2VzIjpbInNyYy9qcy9wb3B1cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgLy8gYnV0dG9ucyBmb3IgZXh0ZW5zaW9uIG9uL29mZiBzdGF0ZVxyXG4gIGNvbnN0IGV4dEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXh0LWljb24nKTtcclxuICBjb25zdCBleHRPZmZCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXh0LW9mZicpO1xyXG4gIGNvbnN0IGV4dE9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4dC1vbicpO1xyXG4gIGNvbnN0IGV4dFN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leHQtc3RhdHVzJyk7XHJcblxyXG4gIC8vIGJ1dHRvbnMgZm9yIGV4dGVuc2lvbiBsaWdodC9kYXJrL3N5c3RlbSBtb2RlXHJcbiAgY29uc3QgbW9kZUxpZ2h0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGUtbGlnaHQnKTtcclxuICBjb25zdCBtb2RlRGFya0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RlLWRhcmsnKTtcclxuICBjb25zdCBtb2RlU3lzdGVtQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGUtc3lzdGVtJyk7XHJcbiAgY29uc3QgbW9kZVN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RlLXN0YXR1cycpO1xyXG5cclxuICAvLyBsZXQgZXh0RW5hYmxlZCA9IHRydWU7XHJcbiAgLy8gbGV0IG1vZGVTZWxlY3RlZCA9ICdsaWdodCc7XHJcblxyXG4gIC8vIExvYWQgdGhlIGluaXRpYWwgdmFsdWVzIGZyb20gc3RvcmFnZVxyXG4gIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFsnZXh0RW5hYmxlZCcsICdtb2RlU2VsZWN0ZWQnXSwgZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICBleHRFbmFibGVkID0gcmVzdWx0LmV4dEVuYWJsZWQgPz8gZXh0RW5hYmxlZDtcclxuICAgIG1vZGVTZWxlY3RlZCA9IHJlc3VsdC5tb2RlU2VsZWN0ZWQgPz8gbW9kZVNlbGVjdGVkO1xyXG4gICAgdXBkYXRlRXh0VUkoZXh0RW5hYmxlZCwgbW9kZVNlbGVjdGVkKTtcclxuICB9KTtcclxuXHJcbiAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKGZ1bmN0aW9uKGNoYW5nZXMsIG5hbWVzcGFjZSkge1xyXG4gICAgaWYgKG5hbWVzcGFjZSA9PT0gJ3N5bmMnKSB7XHJcbiAgICAgIGlmICgnZXh0RW5hYmxlZCcgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGV4dEVuYWJsZWQgPSBjaGFuZ2VzLmV4dEVuYWJsZWQubmV3VmFsdWU7XHJcbiAgICAgICAgdXBkYXRlRXh0VUkoZXh0RW5hYmxlZCwgbW9kZVNlbGVjdGVkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGV4dEVuYWJsZWQgJiYgJ21vZGVTZWxlY3RlZCcgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIG1vZGVTZWxlY3RlZCA9IGNoYW5nZXMubW9kZVNlbGVjdGVkLm5ld1ZhbHVlO1xyXG4gICAgICAgIHVwZGF0ZUV4dFVJKGV4dEVuYWJsZWQsIG1vZGVTZWxlY3RlZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlRXh0VUkoZXh0RW5hYmxlZCwgbW9kZVNlbGVjdGVkKSB7XHJcbiAgICAvLyB1cGRhdGUgZXh0ZW5zaW9uIG9uL29mZiBidXR0b25zXHJcbiAgICBpZiAoZXh0RW5hYmxlZCkge1xyXG4gICAgICBleHRPZmZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZXh0LWFjdGl2ZScpO1xyXG4gICAgICBleHRPbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdleHQtYWN0aXZlJyk7XHJcbiAgICAgIGV4dFN0YXR1cy50ZXh0Q29udGVudCA9ICdFeHRlbnNpb24gaXMgZW5hYmxlZC4nO1xyXG4gICAgICBleHRJY29uLnN0eWxlLmZpbHRlciA9IFwiZ3JheXNjYWxlKDApXCI7XHJcblxyXG4gICAgICBtb2RlTGlnaHRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIG1vZGVEYXJrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBtb2RlU3lzdGVtQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBtb2RlU3RhdHVzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXh0T25CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZXh0LWFjdGl2ZScpO1xyXG4gICAgICBleHRPZmZCdXR0b24uY2xhc3NMaXN0LmFkZCgnZXh0LWFjdGl2ZScpO1xyXG4gICAgICBleHRTdGF0dXMudGV4dENvbnRlbnQgPSAnRXh0ZW5zaW9uIGlzIGRpc2FibGVkLic7XHJcbiAgICAgIGV4dEljb24uc3R5bGUuZmlsdGVyID0gXCJncmF5c2NhbGUoMSlcIjtcclxuXHJcbiAgICAgIG1vZGVMaWdodEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBtb2RlRGFya0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBtb2RlU3lzdGVtQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIG1vZGVTdGF0dXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgIC8vIGFsd2F5cyBzZXQgbW9kZVNlbGVjdGVkIHRvICdsaWdodCcgd2hlbiBleHRlbnNpb24gaXMgdHVybmVkIG9mZlxyXG4gICAgICBtb2RlU2VsZWN0ZWQgPSAnbGlnaHQnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSBtb2RlIGJ1dHRvbnNcclxuICAgIG1vZGVMaWdodEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RlLWFjdGl2ZScpO1xyXG4gICAgbW9kZURhcmtCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kZS1hY3RpdmUnKTtcclxuICAgIG1vZGVTeXN0ZW1CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kZS1hY3RpdmUnKTtcclxuXHJcbiAgICBpZiAobW9kZVNlbGVjdGVkID09PSAnbGlnaHQnKSB7XHJcbiAgICAgIG1vZGVMaWdodEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtb2RlLWFjdGl2ZScpO1xyXG4gICAgICBtb2RlU3RhdHVzLnRleHRDb250ZW50ID0gJ1RoZW1lJztcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdsaWdodCcpO1xyXG4gICAgfSBlbHNlIGlmIChtb2RlU2VsZWN0ZWQgPT09ICdkYXJrJykge1xyXG4gICAgICBtb2RlRGFya0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdtb2RlLWFjdGl2ZScpO1xyXG4gICAgICBtb2RlU3RhdHVzLnRleHRDb250ZW50ID0gJ1RoZW1lJztcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdkYXJrJyk7XHJcbiAgICB9IGVsc2UgaWYgKG1vZGVTZWxlY3RlZCA9PT0gJ3N5c3RlbScpIHtcclxuICAgICAgbW9kZVN5c3RlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtb2RlLWFjdGl2ZScpO1xyXG4gICAgICBtb2RlU3RhdHVzLnRleHRDb250ZW50ID0gJ1RoZW1lJztcclxuXHJcbiAgICAgIC8vIGRhcmtlbiBwb3B1cCBiYXNlZCBvbiBzeXN0ZW0gY29sb3Igc2NoZW1lXHJcbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2RhcmsnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHVwZGF0ZXMgcG9wdXAgd2hlbiBzeXN0ZW0gY2hhbmdlc1xyXG4gIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgIGlmIChleHRFbmFibGVkICYmIG1vZGVTZWxlY3RlZCA9PT0gJ3N5c3RlbScpIHtcclxuICAgICAgaWYgKGUubWF0Y2hlcykge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnbGlnaHQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBidXR0b24gY2xpY2sgZXZlbnQgaGFuZGxlcnNcclxuICBleHRPZmZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgZXh0RW5hYmxlZDogZmFsc2UgfSk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgZXh0T25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgZXh0RW5hYmxlZDogdHJ1ZSB9KTtcclxuICB9KTtcclxuXHJcbiAgbW9kZUxpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IG1vZGVTZWxlY3RlZDogJ2xpZ2h0JyB9KTtcclxuICB9KTtcclxuXHJcbiAgbW9kZURhcmtCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgbW9kZVNlbGVjdGVkOiAnZGFyaycgfSk7XHJcbiAgfSk7XHJcblxyXG4gIG1vZGVTeXN0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgbW9kZVNlbGVjdGVkOiAnc3lzdGVtJyB9KTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJwb3B1cC4zYzQxMGMyMS5qcy5tYXAifQ==
