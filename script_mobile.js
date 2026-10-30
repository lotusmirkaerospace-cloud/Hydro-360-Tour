(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer_mobile","this.Container_96D94F89_879E_EDD5_4198_5FAAF0D2F3D2_mobile"],"layout":"absolute","id":"rootPlayer","class":"Player","defaultMenu":["fullscreen","mute","rotation"],"data":{"displayTooltipInTouchScreens":true,"defaultLocale":"en","history":{},"name":"Player740","textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"volume":1,"rate":1,"stopBackgroundAudio":false,"speechOnQuizQuestion":false},"locales":{"en":"locale/en.txt"}},"backgroundColor":["#FFFFFF"],"minHeight":0,"start":"this.init()","minWidth":0,"hash": "eb0bc28251917ea9261a269b80c61a6e75de50b0def16d9a594062e7722dcf1a", "definitions": [{"paddingRight":0,"rollOverShadow":false,"layout":"horizontal","paddingTop":0,"rollOverFontColor":"#FFFFFF","id":"Button_96ED4CCF_87A6_536E_41A2_BA7C43FB9E0B_mobile","buttonGroup":"Heights ","paddingBottom":0,"class":"Button","fontSize":"11px","backgroundColor":["#FFFFFF"],"data":{"name":"Revit Model"},"pressedFontColor":"#FFFFFF","tabIndex":0,"verticalAlign":"middle","minHeight":1,"fontWeight":"bold","minWidth":1,"backgroundColorRatios":[0],"mode":"toggle","rollOverBackgroundOpacity":0.7,"fontFamily":"Montserrat SemiBold","rollOverBackgroundColor":["#000000"],"pressedBackgroundColorRatios":[1],"iconHeight":0,"pressedBackgroundColorDirection":"vertical","width":88.02,"rollOverBackgroundColorRatios":[0],"fontColor":"#000000","propagateClick":false,"height":20.01,"pressedBackgroundOpacity":0.7,"iconWidth":0,"paddingLeft":0,"borderColor":"#000000","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_9BBFC6AF_8BA2_B3B5_41BB_CD77770BFBA5, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 2)","backgroundOpacity":0.7,"pressedBackgroundColor":["#000000"],"label":trans('Button_96ED4CCF_87A6_536E_41A2_BA7C43FB9E0B_mobile.label'),"horizontalAlign":"center"},{"scrollBarWidth":5,"layout":"vertical","id":"Container_96D94F89_879E_EDD5_4198_5FAAF0D2F3D2_mobile","class":"Container","data":{"name":"Container"},"right":"0%","minHeight":10,"minWidth":10,"scrollBarMargin":1,"gap":5,"top":"0%","overflow":"scroll","width":"25.958%","propagateClick":false,"height":"100%","children":["this.Container_97591068_879E_5353_41D9_FB44CDF7D81F_mobile"],"backgroundOpacity":0,"scrollBarColor":"#000000"},{"class":"PanoramaCamera","initialSequence":"this.sequence_84E35F37_8BE5_5294_41BA_BCE606858A0D","id":"panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"enterPointingToHorizon":true},{"class":"Panorama","hfovMax":130,"vfov":180,"data":{"label":"Original Pnao"},"id":"panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8","hfov":360,"label":trans('panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8.label'),"thumbnailUrl":"media/panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_t.webp","frames":[{"thumbnailUrl":"media/panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"colCount":24,"height":4096,"url":"media/panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_0/{face}/0/{row}_{column}.webp","tags":"ondemand","rowCount":4,"class":"TiledImageResourceLevel","width":24576},{"colCount":12,"height":2048,"url":"media/panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_0/{face}/1/{row}_{column}.webp","tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","width":12288},{"colCount":6,"height":1024,"url":"media/panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","width":6144}]}}]},{"aaEnabled":true,"arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"displayPlaybackBar":true,"mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer_mobile","id":"MainViewer_mobilePanoramaPlayer","touchControlMode":"drag_rotation","class":"PanoramaPlayer"},{"paddingRight":0,"rollOverShadow":false,"layout":"horizontal","paddingTop":0,"pressedBackgroundColor":["#000000"],"id":"Button_846A386D_8BE6_DEB5_41D0_0D460F78A615_mobile","buttonGroup":"Heights ","paddingBottom":0,"class":"Button","fontSize":"11px","backgroundColor":["#FFFFFF"],"data":{"name":"Revit Model  B"},"pressedFontColor":"#FFFFFF","tabIndex":0,"verticalAlign":"middle","minHeight":1,"fontWeight":"bold","minWidth":1,"backgroundColorRatios":[0],"mode":"toggle","rollOverBackgroundOpacity":0.7,"fontFamily":"Montserrat SemiBold","rollOverBackgroundColor":["#000000"],"pressedBackgroundColorRatios":[1],"iconHeight":0,"pressedBackgroundColorDirection":"vertical","width":88.02,"rollOverBackgroundColorRatios":[0],"fontColor":"#000000","propagateClick":false,"height":20.01,"pressedBackgroundOpacity":0.7,"iconWidth":0,"paddingLeft":0,"borderColor":"#000000","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_9BBF16AF_8BA2_B3B5_41DA_DE7556199D5C, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 3)","backgroundOpacity":0.7,"rollOverFontColor":"#FFFFFF","label":trans('Button_846A386D_8BE6_DEB5_41D0_0D460F78A615_mobile.label'),"horizontalAlign":"center"},{"id":"panorama_84E16479_8BE5_569C_41D1_405320D909B0","class":"Panorama","hfovMax":130,"vfov":180,"data":{"label":"Pimpalpada_Revit_A_without_WCS_360_8k"},"hfov":360,"label":trans('panorama_84E16479_8BE5_569C_41D1_405320D909B0.label'),"thumbnailUrl":"media/panorama_84E16479_8BE5_569C_41D1_405320D909B0_t.webp","frames":[{"thumbnailUrl":"media/panorama_84E16479_8BE5_569C_41D1_405320D909B0_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"colCount":18,"height":3072,"url":"media/panorama_84E16479_8BE5_569C_41D1_405320D909B0_0/{face}/0/{row}_{column}.webp","tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel","width":18432},{"colCount":12,"height":2048,"url":"media/panorama_84E16479_8BE5_569C_41D1_405320D909B0_0/{face}/1/{row}_{column}.webp","tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","width":12288},{"colCount":6,"height":1024,"url":"media/panorama_84E16479_8BE5_569C_41D1_405320D909B0_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","width":6144}]}}],"hfovMin":"120%"},{"class":"PanoramaCamera","initialSequence":"this.sequence_8D91DAC7_8762_575D_41DF_71EBAA9144B0","id":"panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_camera","initialPosition":{"pitch":-5.75,"class":"PanoramaCameraPosition","yaw":91.59},"enterPointingToHorizon":true},{"paddingRight":0,"rollOverShadow":false,"layout":"horizontal","paddingTop":0,"rollOverFontColor":"#FFFFFF","id":"Button_881659D9_87A2_5575_41C4_6AA14722FD17_mobile","buttonGroup":"Heights ","paddingBottom":0,"class":"Button","fontSize":"11px","backgroundColor":["#FFFFFF"],"data":{"name":"Original"},"pressedFontColor":"#FFFFFF","tabIndex":0,"verticalAlign":"middle","minHeight":1,"fontWeight":"bold","minWidth":1,"backgroundColorRatios":[0],"mode":"toggle","rollOverBackgroundOpacity":0.7,"fontFamily":"Montserrat SemiBold","rollOverBackgroundColor":["#000000"],"pressedBackgroundColorRatios":[1],"iconHeight":0,"pressedBackgroundColorDirection":"vertical","width":66.53,"rollOverBackgroundColorRatios":[0],"fontColor":"#000000","propagateClick":false,"height":20,"pressedBackgroundOpacity":0.7,"iconWidth":0,"paddingLeft":0,"borderColor":"#000000","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_9BBF96AF_8BA2_B3B5_41A9_1FA245BD4482, 91.59023668639048, -5.755677368833196, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","backgroundOpacity":0.7,"pressedBackgroundColor":["#000000"],"label":trans('Button_881659D9_87A2_5575_41C4_6AA14722FD17_mobile.label'),"horizontalAlign":"center"},{"toolTipFontSize":"1.11vmin","subtitlesTextShadowOpacity":1,"vrPointerSelectionTime":2000,"playbackBarHeadBorderRadius":0,"progressBorderColor":"#000000","toolTipShadowBlurRadius":1,"vrThumbstickRotationStep":20,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBorderRadius":1,"toolTipBorderColor":"#767676","subtitlesFontFamily":"Arial","surfaceReticleSelectionColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadBorderColor":"#000000","playbackBarBottom":5,"toolTipTextShadowColor":"#000000","playbackBarBorderSize":0,"toolTipTextShadowBlurRadius":1,"data":{"name":"Main Viewer"},"progressBackgroundColor":["#000000"],"toolTipShadowColor":"#333138","progressBottom":10,"subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"vrPointerColor":"#FFFFFF","subtitlesBottom":50,"subtitlesTextShadowVerticalLength":1,"propagateClick":false,"progressBorderSize":0,"progressBarBorderSize":0,"progressHeight":2,"progressBarBorderRadius":2,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"subtitlesFontColor":"#FFFFFF","playbackBarBackgroundColorDirection":"vertical","toolTipFontColor":"#606060","playbackBarRight":0,"subtitlesGap":0,"subtitlesTop":0,"playbackBarProgressBorderRadius":0,"progressBackgroundColorRatios":[0],"id":"MainViewer_mobile","class":"ViewerArea","progressBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"progressRight":"33%","progressLeft":"33%","playbackBarHeadShadowOpacity":0.7,"subtitlesBackgroundColor":"#000000","progressOpacity":0.7,"subtitlesTextShadowColor":"#000000","minHeight":25,"playbackBarHeadShadowBlurRadius":1.5,"minWidth":50,"toolTipPaddingLeft":3,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","playbackBarHeadHeight":15,"surfaceReticleColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"toolTipBackgroundColor":"#F6F6F6","progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarLeft":0,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundOpacity":1,"width":"100%","playbackBarHeadShadow":true,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"playbackBarHeadShadowColor":"#000000","playbackBarBorderRadius":0,"firstTransitionDuration":0,"playbackBarProgressBorderColor":"#000000","height":"100%","subtitlesFontSize":"3vmin","toolTipPaddingRight":3,"subtitlesBackgroundOpacity":0.2,"toolTipFontFamily":"Arial"},{"scrollBarWidth":5,"layout":"vertical","id":"Container_97591068_879E_5353_41D9_FB44CDF7D81F_mobile","class":"Container","data":{"name":"Container"},"verticalAlign":"middle","minHeight":10,"minWidth":10,"scrollBarMargin":1,"gap":5,"overflow":"scroll","width":"100%","propagateClick":false,"height":"21.626%","children":["this.Button_881659D9_87A2_5575_41C4_6AA14722FD17_mobile","this.Button_96A45DE6_87A6_2D5F_41E0_D4A85F302467_mobile","this.Button_96ED4CCF_87A6_536E_41A2_BA7C43FB9E0B_mobile","this.Button_846A386D_8BE6_DEB5_41D0_0D460F78A615_mobile"],"backgroundOpacity":0,"scrollBarColor":"#000000"},{"id":"panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46","class":"Panorama","hfovMax":130,"vfov":180,"data":{"label":"Pimpalpada_Revit_B_new_layout_360_8k"},"hfov":360,"label":trans('panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46.label'),"thumbnailUrl":"media/panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46_t.webp","frames":[{"thumbnailUrl":"media/panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"colCount":18,"height":3072,"url":"media/panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46_0/{face}/0/{row}_{column}.webp","tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel","width":18432},{"colCount":12,"height":2048,"url":"media/panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46_0/{face}/1/{row}_{column}.webp","tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","width":12288},{"colCount":6,"height":1024,"url":"media/panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","width":6144}]}}],"hfovMin":"120%"},{"class":"PanoramaCamera","initialSequence":"this.sequence_84E37F37_8BE5_5294_41DD_22645046AA7B","id":"panorama_84E16479_8BE5_569C_41D1_405320D909B0_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"enterPointingToHorizon":true},{"class":"PanoramaCamera","initialSequence":"this.sequence_84E39F37_8BE5_5294_41D0_D5E20925CB00","id":"panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"enterPointingToHorizon":true},{"paddingRight":0,"rollOverShadow":false,"layout":"horizontal","paddingTop":0,"rollOverFontColor":"#FFFFFF","id":"Button_96A45DE6_87A6_2D5F_41E0_D4A85F302467_mobile","buttonGroup":"Heights ","paddingBottom":0,"class":"Button","fontSize":"11px","backgroundColor":["#FFFFFF"],"data":{"name":"KML Overlay"},"pressedFontColor":"#FFFFFF","tabIndex":0,"verticalAlign":"middle","minHeight":1,"fontWeight":"bold","minWidth":1,"backgroundColorRatios":[0],"mode":"toggle","rollOverBackgroundOpacity":0.7,"fontFamily":"Montserrat SemiBold","rollOverBackgroundColor":["#000000"],"pressedBackgroundColorRatios":[1],"iconHeight":0,"pressedBackgroundColorDirection":"vertical","width":88,"rollOverBackgroundColorRatios":[0],"fontColor":"#000000","propagateClick":false,"height":20,"pressedBackgroundOpacity":0.7,"iconWidth":0,"paddingLeft":0,"borderColor":"#000000","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_9BBFF6AF_8BA2_B3B5_41BE_F2CCA21024A0, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","backgroundOpacity":0.7,"pressedBackgroundColor":["#000000"],"label":trans('Button_96A45DE6_87A6_2D5F_41E0_D4A85F302467_mobile.label'),"horizontalAlign":"center"},{"id":"mainPlayList","items":["this.PanoramaPlayListItem_9BBF96AF_8BA2_B3B5_41A9_1FA245BD4482","this.PanoramaPlayListItem_9BBFF6AF_8BA2_B3B5_41BE_F2CCA21024A0","this.PanoramaPlayListItem_9BBFC6AF_8BA2_B3B5_41BB_CD77770BFBA5","this.PanoramaPlayListItem_9BBF16AF_8BA2_B3B5_41DA_DE7556199D5C"],"class":"PlayList"},{"id":"panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3","class":"Panorama","hfovMax":130,"vfov":180,"data":{"label":"Pimpalpada_KML_overlay_v2_360_8k"},"hfov":360,"label":trans('panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3.label'),"thumbnailUrl":"media/panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3_t.webp","frames":[{"thumbnailUrl":"media/panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"colCount":18,"height":3072,"url":"media/panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3_0/{face}/0/{row}_{column}.webp","tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel","width":18432},{"colCount":12,"height":2048,"url":"media/panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3_0/{face}/1/{row}_{column}.webp","tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","width":12288},{"colCount":6,"height":1024,"url":"media/panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","width":6144}]}}],"hfovMin":"120%"},{"id":"sequence_84E35F37_8BE5_5294_41BA_BCE606858A0D","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"sequence_8D91DAC7_8762_575D_41DF_71EBAA9144B0","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"sequence_84E37F37_8BE5_5294_41DD_22645046AA7B","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"sequence_84E39F37_8BE5_5294_41D0_D5E20925CB00","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"camera":"this.panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_camera","media":"this.panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8","player":"this.MainViewer_mobilePanoramaPlayer","id":"PanoramaPlayListItem_9BBF96AF_8BA2_B3B5_41A9_1FA245BD4482","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3_camera","media":"this.panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3","player":"this.MainViewer_mobilePanoramaPlayer","id":"PanoramaPlayListItem_9BBFF6AF_8BA2_B3B5_41BE_F2CCA21024A0","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"camera":"this.panorama_84E16479_8BE5_569C_41D1_405320D909B0_camera","media":"this.panorama_84E16479_8BE5_569C_41D1_405320D909B0","player":"this.MainViewer_mobilePanoramaPlayer","id":"PanoramaPlayListItem_9BBFC6AF_8BA2_B3B5_41BB_CD77770BFBA5","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"camera":"this.panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46_camera","media":"this.panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46","end":"this.trigger('tourEnded')","player":"this.MainViewer_mobilePanoramaPlayer","id":"PanoramaPlayListItem_9BBF16AF_8BA2_B3B5_41DA_DE7556199D5C","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)"}],"backgroundColorRatios":[0],"gap":10,"left":826.6,"scrollBarMargin":2,"width":"100%","propagateClick":false,"height":"100%","scripts":{"initQuiz":TDV.Tour.Script.initQuiz,"registerKey":TDV.Tour.Script.registerKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setLocale":TDV.Tour.Script.setLocale,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setValue":TDV.Tour.Script.setValue,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"clone":TDV.Tour.Script.clone,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playAudioList":TDV.Tour.Script.playAudioList,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"openLink":TDV.Tour.Script.openLink,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"downloadFile":TDV.Tour.Script.downloadFile,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizStart":TDV.Tour.Script.quizStart,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"mixObject":TDV.Tour.Script.mixObject,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPixels":TDV.Tour.Script.getPixels,"startMeasurement":TDV.Tour.Script.startMeasurement,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"toggleVR":TDV.Tour.Script.toggleVR,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"initAnalytics":TDV.Tour.Script.initAnalytics,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"enableVR":TDV.Tour.Script.enableVR,"disableVR":TDV.Tour.Script.disableVR,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getKey":TDV.Tour.Script.getKey,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaByName":TDV.Tour.Script.getMediaByName,"showWindow":TDV.Tour.Script.showWindow,"init":TDV.Tour.Script.init,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getOverlays":TDV.Tour.Script.getOverlays,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"createTween":TDV.Tour.Script.createTween,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"quizFinish":TDV.Tour.Script.quizFinish,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"historyGoBack":TDV.Tour.Script.historyGoBack,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"textToSpeech":TDV.Tour.Script.textToSpeech,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"isPanorama":TDV.Tour.Script.isPanorama,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"shareSocial":TDV.Tour.Script.shareSocial,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"executeJS":TDV.Tour.Script.executeJS,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"translate":TDV.Tour.Script.translate,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"existsKey":TDV.Tour.Script.existsKey,"getComponentByName":TDV.Tour.Script.getComponentByName,"resumePlayers":TDV.Tour.Script.resumePlayers,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"cloneBindings":TDV.Tour.Script.cloneBindings,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"unregisterKey":TDV.Tour.Script.unregisterKey,"quizShowScore":TDV.Tour.Script.quizShowScore,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode},"watermark":false,"scrollBarColor":"#000000"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.36, Fri Oct 30 2026
//