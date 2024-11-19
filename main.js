import { t } from './src/js/i18n.js';

// 语言切换函数
function switchLanguage(lang) {
    // 保存用户语言选择
    localStorage.setItem('userLanguage', lang);
    // 更新文档语言
    document.documentElement.lang = lang;
    // 重新翻译页面
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });
}

// 导出函数供全局使用
window.switchLanguage = switchLanguage;
