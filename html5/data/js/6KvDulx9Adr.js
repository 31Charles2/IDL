﻿window.globalProvideData('slide', '{"title":"QUESTION 4","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":8,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide8","width":960,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6KvDulx9Adr","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5jF4UJk7HXr.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6dQcb5292hg.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.5u1b4Ly1hOr"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5ayKw0z57Mp.InvalidPromptSlide"}}]}]},"ReviewInt_6cZtRHBuPYS":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5jF4UJk7HXr"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6dQcb5292hg"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5u1b4Ly1hOr.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6cZtRHBuPYS_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6cZtRHBuPYS_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6KvDulx9Adr","typea":"var","valueb":"6cJ2c2toKrJ","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns10111111111"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6cJ2c2toKrJ.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6cZtRHBuPYS"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6cJ2c2toKrJ.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6cZtRHBuPYS"}]}]}]},"ReviewIntCorrectIncorrect_6cZtRHBuPYS":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5jF4UJk7HXr"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6dQcb5292hg"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6cZtRHBuPYS":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6cZtRHBuPYS"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10111111111"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10111111111"}]}]},"DisableChoices_6cZtRHBuPYS":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5jF4UJk7HXr"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6dQcb5292hg"},"enabled":{"type":"boolean","value":false}}]},"6cZtRHBuPYS_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5u1b4Ly1hOr.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6cJ2c2toKrJ.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6cZtRHBuPYS"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5u1b4Ly1hOr.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5u1b4Ly1hOr.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6cZtRHBuPYS"}]}]}]}]},"SetLayout_pxabnsnfns10111111111":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10111111111"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10111111111"}]}]},"NavigationRestrictionNextSlide_6KvDulx9Adr":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.61QQxmbHcc9"}}]},"NavigationRestrictionPreviousSlide_6KvDulx9Adr":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns10111111111"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns10111111111"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5ayKw0z57Mp","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5ayKw0z57Mp","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6cJ2c2toKrJ_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6cJ2c2toKrJ_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6cJ2c2toKrJ_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6cZtRHBuPYS"}]},{"kind":"showtimer","id":"_player.6cJ2c2toKrJ_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6cZtRHBuPYS","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6cZtRHBuPYS"}],"elseActions":[{"kind":"exe_actiongroup","id":"6cZtRHBuPYS_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6cZtRHBuPYS","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6KvDulx9Adr","typea":"var","valueb":"6cJ2c2toKrJ","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6cJ2c2toKrJ"},"completed_slide_ref":{"type":"string","value":"_player.6Rotfbtdr3E.65pS42j2rIA"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6cZtRHBuPYS","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6KvDulx9Adr","typea":"var","valueb":"6cJ2c2toKrJ","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6cJ2c2toKrJ"},"completed_slide_ref":{"type":"string","value":"_player.6Rotfbtdr3E.65pS42j2rIA"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6KvDulx9Adr"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6KvDulx9Adr"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Ypy3k2sDZM"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"61CyFsrSjlq"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6D41umlC3CW"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6V0zl0XBlQu"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6iceWKRRhXY"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5jF4UJk7HXr"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6dQcb5292hg"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":1,"tabIndex":0,"tabEnabled":true,"referenceName":"6Ypy3k2sDZM","xOffset":0,"yOffset":0,"rotateXPos":479.5,"rotateYPos":239.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":961,"bottom":481,"altText":"Rectangle 4","pngfb":false,"pr":{"l":"Lib","i":203}},"html5data":{"xPos":-1,"yPos":-1,"width":962,"height":482,"strokewidth":1}},"width":960,"height":480,"resume":true,"useHandCursor":true,"id":"6Ypy3k2sDZM"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"61CyFsrSjlq_1324585408","id":"01","linkId":"txt__default_61CyFsrSjlq","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":706,"height":53,"valign":"bottom","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"QUESTION 4","style":{"fontFamily":"\\"Times New RomanBoldBold3F3ED7D4\\",\\"Times New Roman\\"","fontSize":27,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#000000","linkColor":"#000000","ascent":32.08,"descent":7.787,"leading":1.529,"underlinePosition":-3.92,"underlineThickness":3.428,"xHeight":16.436}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"center","listLevel":1,"lineSpacingRule":"atLeast","lineSpacing":43.2,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Calibri Light","fontSize":45,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"displayCase":"asIs","foregroundColor":"#000000"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":10,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Calibri Light","fontSize":45,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0563C1"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":469,"bottom":58,"pngfb":false,"pr":{"l":"Lib","i":225}}}],"shapemaskId":"","xPos":120,"yPos":7,"tabIndex":1,"tabEnabled":true,"referenceName":"61CyFsrSjlq","xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":29.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":60,"altText":"QUESTION 4","pngfb":false,"pr":{"l":"Lib","i":78}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":60,"strokewidth":0}},"width":720,"height":59,"resume":true,"useHandCursor":true,"id":"61CyFsrSjlq"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":481,"tabIndex":7,"tabEnabled":true,"referenceName":"6D41umlC3CW","xOffset":0,"yOffset":0,"rotateXPos":479.5,"rotateYPos":28.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":961,"bottom":59,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":82}},"html5data":{"xPos":-1,"yPos":-1,"width":962,"height":60,"strokewidth":1}},"width":960,"height":58,"resume":true,"useHandCursor":true,"id":"6D41umlC3CW"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":8,"id":"01","url":"story_content/6L8jD07OuD0.png","type":"normal","altText":"A cartoon robot with big eyes\\r\\n\\r\\nDescription automatically generated","width":406,"height":406,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-12,"yPos":292,"tabIndex":6,"tabEnabled":true,"referenceName":"6V0zl0XBlQu","xOffset":0,"yOffset":0,"rotateXPos":101.5,"rotateYPos":101.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":203,"bottom":203,"altText":"A cartoon robot with big eyes\\r\\n\\r\\nDescription automatically generated","altTextOverridesText":true,"pngfb":false,"pr":{"l":"Lib","i":91}},"html5data":{"xPos":0,"yPos":0,"width":203,"height":203,"strokewidth":0}},"width":203,"height":203,"resume":true,"useHandCursor":true,"id":"6V0zl0XBlQu"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6iceWKRRhXY_1855300894","id":"01","linkId":"txt__default_6iceWKRRhXY","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":946,"height":44,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"TRUE OR FALSE?\\n","style":{"fontFamily":"\\"Calibri Charset0_v2mWipD31519F7\\",\\"Calibri\\"","fontSize":13.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#000000","linkColor":"#000000","ascent":17.139,"descent":4.834,"leading":0,"underlinePosition":-2.039,"underlineThickness":1.178,"xHeight":8.358}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"center","listLevel":1,"lineSpacingRule":"multiple","lineSpacing":20,"spacingBefore":0,"spacingAfter":0,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":15,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"AI DOING ALL OF OUR SCHOOLWORK HAS NO NEGATIVE CONSEQUENCES.","style":{"fontFamily":"\\"Calibri Charset0_v2mWipD31519F7\\",\\"Calibri\\"","fontSize":13.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#000000","linkColor":"#000000","ascent":17.139,"descent":4.834,"leading":0,"underlinePosition":-2.039,"underlineThickness":1.178,"xHeight":8.358}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"center","listLevel":1,"lineSpacingRule":"multiple","lineSpacing":20,"spacingBefore":0,"spacingAfter":0,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":60,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Calibri","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0563C1"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":750,"bottom":47,"pngfb":false,"pr":{"l":"Lib","i":226}}}],"shapemaskId":"","xPos":0,"yPos":80,"tabIndex":3,"tabEnabled":true,"referenceName":"6iceWKRRhXY","xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":960,"bottom":50,"altText":"TRUE OR FALSE?\\nAI DOING ALL OF OUR SCHOOLWORK HAS NO NEGATIVE CONSEQUENCES.","pngfb":false,"pr":{"l":"Lib","i":205}},"html5data":{"xPos":0,"yPos":0,"width":960,"height":50,"strokewidth":0}},"width":960,"height":50,"resume":true,"useHandCursor":true,"id":"6iceWKRRhXY"},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"60tSQ20oJdz_1869696951","id":"01","linkId":"txt__default_5jF4UJk7HXr","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":577,"height":52,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"TRUE","style":{"fontFamily":"\\"Calibri Charset0_v2mWipD31519F7\\",\\"Calibri\\"","fontSize":13.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#000000","linkColor":"#000000","ascent":17.139,"descent":4.834,"leading":0,"underlinePosition":-2.039,"underlineThickness":1.178,"xHeight":8.358}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"center","listLevel":1,"lineSpacingRule":"multiple","lineSpacing":20,"spacingBefore":0,"spacingAfter":0,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":4,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Calibri","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0563C1"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":315,"bottom":40,"pngfb":false,"pr":{"l":"Lib","i":209}}}],"shapemaskId":"","xPos":197,"yPos":192,"tabIndex":4,"tabEnabled":true,"referenceName":"5jF4UJk7HXr","radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":295,"rotateYPos":28.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":592,"bottom":59,"altText":"TRUE","pngfb":false,"pr":{"l":"Lib","i":207}},"html5data":{"xPos":-1,"yPos":-1,"width":593,"height":60,"strokewidth":1}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":592,"bottom":59,"altText":"TRUE","pngfb":false,"pr":{"l":"Lib","i":208}},"html5data":{"xPos":-1,"yPos":-1,"width":593,"height":60,"strokewidth":1}}}],"width":591,"height":58,"resume":true,"useHandCursor":true,"id":"5jF4UJk7HXr","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savechecked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_tempStateNameBuilder","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savechecked","operator":"set","value":{"type":"var","value":"#_checked"}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6dQcb5292hg.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6dQcb5292hg._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6dQcb5292hg"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savechecked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"68MqWRqV7un_-648678667","id":"01","linkId":"txt__default_6dQcb5292hg","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":577,"height":52,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"FALSE","style":{"fontFamily":"\\"Calibri Charset0_v2mWipD31519F7\\",\\"Calibri\\"","fontSize":13.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#000000","linkColor":"#000000","ascent":17.139,"descent":4.834,"leading":0,"underlinePosition":-2.039,"underlineThickness":1.178,"xHeight":8.358}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"center","listLevel":1,"lineSpacingRule":"multiple","lineSpacing":20,"spacingBefore":0,"spacingAfter":0,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":5,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Calibri","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0563C1"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":317,"bottom":40,"pngfb":false,"pr":{"l":"Lib","i":210}}}],"shapemaskId":"","xPos":197,"yPos":273,"tabIndex":5,"tabEnabled":true,"referenceName":"6dQcb5292hg","radioGroup":"Pick One","xOffset":0,"yOffset":0,"rotateXPos":295,"rotateYPos":28.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":592,"bottom":59,"altText":"FALSE","pngfb":false,"pr":{"l":"Lib","i":207}},"html5data":{"xPos":-1,"yPos":-1,"width":593,"height":60,"strokewidth":1}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":592,"bottom":59,"altText":"FALSE","pngfb":false,"pr":{"l":"Lib","i":208}},"html5data":{"xPos":-1,"yPos":-1,"width":593,"height":60,"strokewidth":1}}}],"width":591,"height":58,"resume":true,"useHandCursor":true,"id":"6dQcb5292hg","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savechecked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_tempStateNameBuilder","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savechecked","operator":"set","value":{"type":"var","value":"#_checked"}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5jF4UJk7HXr.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5jF4UJk7HXr._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5jF4UJk7HXr"}}]}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savechecked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6cZtRHBuPYS_CorrectReview","id":"01","linkId":"6cZtRHBuPYS_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":520,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":185}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":184}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"6cZtRHBuPYS_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6cZtRHBuPYS_IncorrectReview","id":"01","linkId":"6cZtRHBuPYS_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":528,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":187}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":186}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"6cZtRHBuPYS_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');