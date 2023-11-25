// ==UserScript==
// @name         EasyCSDN
// @description  这是一款促进CSDN极致简洁和高效的插件。免费共享大量创新功能，如：净化页面、展示全屏、临时显示推荐等。让我们的学习体验无比简洁、专注、高效、畅快。
// @version      12.0
// @author       xcanwin
// @namespace    https://github.com/xcanwin/EasyCSDN/
// @supportURL   https://github.com/xcanwin/EasyCSDN/
// @updateURL    https://greasyfork.org/scripts/480668-easycsdn/code/EasyCSDN.user.js
// @downloadURL  https://greasyfork.org/scripts/480668-easycsdn/code/EasyCSDN.user.js
// @license      GPL-2.0-only
// @match        *://blog.csdn.net/*/article/details/*
// @match        *://*.blog.csdn.net/article/details/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const $ = (Selector, el) => (el || document).querySelector(Selector);
    const $$ = (Selector, el) => (el || document).querySelectorAll(Selector);

    /*电脑端净化样式*/
    const purify_style_pc = `
.passport-login-container /*隐藏[置顶的]登录提示*/,
.passport-login-tip-container /*隐藏[置顶的]登录权益提示*/,
body>#toolbarBox /*隐藏[置顶的][顶部的]菜单栏*/,
.left-toolbox /*隐藏[置顶的][底部的]关注栏*/,
.blog_container_aside /*隐藏[左边的]栏*/,
#rightAside /*隐藏[右边的]栏*/,
.csdn-side-toolbar /*隐藏[右边的]磁吸栏*/,
.blog-footer-bottom /*隐藏[底部的]网站介绍*/,
.recommend-nps-box /*隐藏[底部的]打分*/,
.blog-tags-box /*隐藏[正文的][顶部的]分类*/,
#blogColumnPayAdvert /*隐藏[正文的][顶部的]专栏*/,
.more-toolbox-new /*隐藏[正文的][底部的]关注栏*/,
#treeSkill /*隐藏[正文的][底部的]技能树*/,
.recommend-box /*隐藏[正文的][底部的]推荐文章*/,
code .hljs-button /*隐藏[正文的][代码块的]复制提示*/,
.article-search-tip /*隐藏[正文的]搜索提示*/
{
    display: none !important;
}

/*隐藏背景*/
body {
    background: none !important;
    background-image: unset !important;
    background-color: unset !important;
}

/*正文居中*/
#mainBox {
    display: flex;
    justify-content: center;
}

/*展示全屏*/
#mainBox, #mainBox main {
    width: 100%;
    margin-bottom: unset !important;
}
.main_father {
    padding: unset !important;
}
.main_father.d-flex {
    display: unset !important;
}

/*临时显示*/
.show-temp {
    display: unset !important;
}
`;


    /*移动端净化样式*/
    const purify_style_mb = `
#csdn-toolbar /*隐藏[置顶的][顶部的]菜单栏*/,
#operate /*隐藏[置顶的][底部的]搜索标签与评论*/,
.aside-header-fixed /*隐藏[顶部的]关注*/
{
    display: none !important;
}

/*展示全屏*/
body #main {
    padding-top: unset !important;
    margin-top: unset !important;
}
body {
    padding-bottom: unset !important;
}

/*展示分界线*/
.spec_space {
    background-color: #ffebeb !important;
    height: 32px !important;
}
`;

    //净化页面
    const purifyPage = function() {
        GM_addStyle(purify_style_pc);
        GM_addStyle(purify_style_mb);
    };

    //显示推荐的开关
    const showRecommend = function() {
        const sr = document.createElement("div");
        sr.style = "height: 64px; background-color: #eaeaea;";
        sr.onclick = function() {
            $$(".recommend-box").forEach(el => {
                el.classList.toggle("show-temp");
            });
            $(".recommend-box")?.scrollIntoView();
        };
        $('main').insertBefore(sr, $('.recommend-box'));
    };

    window.onload = function() {
        showRecommend();
    };

    purifyPage();

})();
