﻿window.globalProvideData('slide', '{"title":"QUESTION 3","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":7,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide7","width":960,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6mwKIoDLazx","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5rWTXrpA4Bs.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5Vc64YgQ8zX.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5aT7iER60m6.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.5iPPm2fhdzP"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5ayKw0z57Mp.InvalidPromptSlide"}}]}]},"ReviewInt_6WBSdbElWWM":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5rWTXrpA4Bs"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5Vc64YgQ8zX"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5aT7iER60m6"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5iPPm2fhdzP.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6WBSdbElWWM_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6WBSdbElWWM_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6mwKIoDLazx","typea":"var","valueb":"6cJ2c2toKrJ","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns10111111111"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6cJ2c2toKrJ.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6WBSdbElWWM"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6cJ2c2toKrJ.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6WBSdbElWWM"}]}]}]},"ReviewIntCorrectIncorrect_6WBSdbElWWM":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5rWTXrpA4Bs"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5Vc64YgQ8zX"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5aT7iER60m6"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6WBSdbElWWM":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6WBSdbElWWM"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10111111111"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10111111111"}]}]},"DisableChoices_6WBSdbElWWM":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5rWTXrpA4Bs"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5Vc64YgQ8zX"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5aT7iER60m6"},"enabled":{"type":"boolean","value":false}}]},"6WBSdbElWWM_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5iPPm2fhdzP.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6cJ2c2toKrJ.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6WBSdbElWWM"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5iPPm2fhdzP.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5iPPm2fhdzP.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6WBSdbElWWM"}]}]}]}]},"SetLayout_pxabnsnfns10111111111":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10111111111"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10111111111"}]}]},"NavigationRestrictionNextSlide_6mwKIoDLazx":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6KvDulx9Adr"}}]},"NavigationRestrictionPreviousSlide_6mwKIoDLazx":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns10111111111"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns10111111111"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5ayKw0z57Mp","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5ayKw0z57Mp","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6cJ2c2toKrJ_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6cJ2c2toKrJ_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6cJ2c2toKrJ_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6WBSdbElWWM"}]},{"kind":"showtimer","id":"_player.6cJ2c2toKrJ_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6WBSdbElWWM","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6WBSdbElWWM"}],"elseActions":[{"kind":"exe_actiongroup","id":"6WBSdbElWWM_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6WBSdbElWWM","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6mwKIoDLazx","typea":"var","valueb":"6cJ2c2toKrJ","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6cJ2c2toKrJ"},"completed_slide_ref":{"type":"string","value":"_player.6Rotfbtdr3E.65pS42j2rIA"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6WBSdbElWWM","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6mwKIoDLazx","typea":"var","valueb":"6cJ2c2toKrJ","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6cJ2c2toKrJ"},"completed_slide_ref":{"type":"string","value":"_player.6Rotfbtdr3E.65pS42j2rIA"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6mwKIoDLazx"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6mwKIoDLazx"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6BuReG4ptCI"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LS3yXe0ROY"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5r7pVMpUvS9"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6fiiauLSyYe"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5qV1bB1vvQ8"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5rWTXrpA4Bs"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5Vc64YgQ8zX"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5aT7iER60m6"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":1,"tabIndex":0,"tabEnabled":true,"referenceName":"6BuReG4ptCI","xOffset":0,"yOffset":0,"rotateXPos":479.5,"rotateYPos":239.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":961,"bottom":481,"altText":"Rectangle 4","pngfb":false,"pr":{"l":"Lib","i":203}},"html5data":{"xPos":-1,"yPos":-1,"width":962,"height":482,"strokewidth":1}},"width":960,"height":480,"resume":true,"useHandCursor":true,"id":"6BuReG4ptCI"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6LS3yXe0ROY_-2067010073","id":"01","linkId":"txt__default_6LS3yXe0ROY","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":706,"height":53,"valign":"bottom","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"QUESTION 3","style":{"fontFamily":"\\"Times New RomanBoldBold3F3ED7D4\\",\\"Times New Roman\\"","fontSize":27,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#000000","linkColor":"#000000","ascent":32.08,"descent":7.787,"leading":1.529,"underlinePosition":-3.92,"underlineThickness":3.428,"xHeight":16.436}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"center","listLevel":1,"lineSpacingRule":"atLeast","lineSpacing":43.2,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Calibri Light","fontSize":45,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"displayCase":"asIs","foregroundColor":"#000000"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":10,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Calibri Light","fontSize":45,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0563C1"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":469,"bottom":58,"pngfb":false,"pr":{"l":"Lib","i":220}}}],"shapemaskId":"","xPos":120,"yPos":7,"tabIndex":1,"tabEnabled":true,"referenceName":"6LS3yXe0ROY","xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":29.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":60,"altText":"QUESTION 3","pngfb":false,"pr":{"l":"Lib","i":78}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":60,"strokewidth":0}},"width":720,"height":59,"resume":true,"useHandCursor":true,"id":"6LS3yXe0ROY"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":481,"tabIndex":8,"tabEnabled":true,"referenceName":"5r7pVMpUvS9","xOffset":0,"yOffset":0,"rotateXPos":479.5,"rotateYPos":28.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":961,"bottom":59,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":82}},"html5data":{"xPos":-1,"yPos":-1,"width":962,"height":60,"strokewidth":1}},"width":960,"height":58,"resume":true,"useHandCursor":true,"id":"5r7pVMpUvS9"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":8,"id":"01","url":"story_content/6L8jD07OuD0.png","type":"normal","altText":"A cartoon robot with big eyes\\r\\n\\r\\nDescription automatically generated","width":406,"height":406,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-12,"yPos":292,"tabIndex":6,"tabEnabled":true,"referenceName":"6fiiauLSyYe","xOffset":0,"yOffset":0,"rotateXPos":101.5,"rotateYPos":101.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":203,"bottom":203,"altText":"A cartoon robot with big eyes\\r\\n\\r\\nDescription automatically generated","altTextOverridesText":true,"pngfb":false,"pr":{"l":"Lib","i":91}},"html5data":{"xPos":0,"yPos":0,"width":203,"height":203,"strokewidth":0}},"width":203,"height":203,"resume":true,"useHandCursor":true,"id":"6fiiauLSyYe"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5qV1bB1vvQ8_-208918988","id":"01","linkId":"txt__default_5qV1bB1vvQ8","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":946,"height":44,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"SELECT THE CORRECT RESPONSES. MORE THAN ONE ANSWER WILL BE CORRECT.\\n","style":{"fontFamily":"\\"Calibri Charset0_v2mWipD31519F7\\",\\"Calibri\\"","fontSize":13.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#000000","linkColor":"#000000","ascent":17.139,"descent":4.834,"leading":0,"underlinePosition":-2.039,"underlineThickness":1.178,"xHeight":8.358}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"center","listLevel":1,"lineSpacingRule":"multiple","lineSpacing":20,"spacingBefore":0,"spacingAfter":0,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":68,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"WHAT IS TRUE ABOUT AI?","style":{"fontFamily":"\\"Calibri Charset0_v2mWipD31519F7\\",\\"Calibri\\"","fontSize":13.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#000000","linkColor":"#000000","ascent":17.139,"descent":4.834,"leading":0,"underlinePosition":-2.039,"underlineThickness":1.178,"xHeight":8.358}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"center","listLevel":1,"lineSpacingRule":"multiple","lineSpacing":20,"spacingBefore":0,"spacingAfter":0,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":22,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Calibri","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0563C1"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":775,"bottom":47,"pngfb":false,"pr":{"l":"Lib","i":221}}}],"shapemaskId":"","xPos":0,"yPos":80,"tabIndex":3,"tabEnabled":true,"referenceName":"5qV1bB1vvQ8","xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":960,"bottom":50,"altText":"SELECT THE CORRECT RESPONSES. MORE THAN ONE ANSWER WILL BE CORRECT.\\nWHAT IS TRUE ABOUT AI?","pngfb":false,"pr":{"l":"Lib","i":205}},"html5data":{"xPos":0,"yPos":0,"width":960,"height":50,"strokewidth":0}},"width":960,"height":50,"resume":true,"useHandCursor":true,"id":"5qV1bB1vvQ8"},{"kind":"vectorshape","rotation":0,"accType":"checkbox","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6oM7aNq1MVP_244322749","id":"01","linkId":"txt__default_5rWTXrpA4Bs","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":577,"height":52,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Generative AI is a very powerful tool that can save you a lot of time","style":{"fontFamily":"\\"Calibri Charset0_v2mWipD31519F7\\",\\"Calibri\\"","fontSize":13.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#000000","linkColor":"#000000","ascent":17.139,"descent":4.834,"leading":0,"underlinePosition":-2.039,"underlineThickness":1.178,"xHeight":8.358}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"center","listLevel":1,"lineSpacingRule":"multiple","lineSpacing":20,"spacingBefore":0,"spacingAfter":0,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":69,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Calibri","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0563C1"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":541,"bottom":40,"pngfb":false,"pr":{"l":"Lib","i":222}}}],"shapemaskId":"","xPos":197,"yPos":167,"tabIndex":4,"tabEnabled":true,"referenceName":"5rWTXrpA4Bs","xOffset":0,"yOffset":0,"rotateXPos":295,"rotateYPos":28.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":592,"bottom":59,"altText":"Generative AI is a very powerful tool that can save you a lot of time","pngfb":false,"pr":{"l":"Lib","i":207}},"html5data":{"xPos":-1,"yPos":-1,"width":593,"height":60,"strokewidth":1}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":592,"bottom":59,"altText":"Generative AI is a very powerful tool that can save you a lot of time","pngfb":false,"pr":{"l":"Lib","i":208}},"html5data":{"xPos":-1,"yPos":-1,"width":593,"height":60,"strokewidth":1}}}],"width":591,"height":58,"resume":true,"useHandCursor":true,"id":"5rWTXrpA4Bs","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savechecked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_tempStateNameBuilder","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savechecked","operator":"set","value":{"type":"var","value":"#_checked"}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savechecked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"adjustvar","variable":"_savechecked","operator":"set","value":{"type":"var","value":"#_checked"}},{"kind":"adjustvar","variable":"_checked","operator":"toggle"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"checkbox","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6GGLnLVCziy_-1734961855","id":"01","linkId":"txt__default_5Vc64YgQ8zX","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":577,"height":52,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Generative AI can discern truth and understands that what it’s saying is true.","style":{"fontFamily":"\\"Calibri Charset0_v2mWipD31519F7\\",\\"Calibri\\"","fontSize":13.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#000000","linkColor":"#000000","ascent":17.139,"descent":4.834,"leading":0,"underlinePosition":-2.039,"underlineThickness":1.178,"xHeight":8.358}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"center","listLevel":1,"lineSpacingRule":"multiple","lineSpacing":20,"spacingBefore":0,"spacingAfter":0,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":78,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Calibri","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0563C1"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":575,"bottom":40,"pngfb":false,"pr":{"l":"Lib","i":223}}}],"shapemaskId":"","xPos":197,"yPos":259,"tabIndex":5,"tabEnabled":true,"referenceName":"5Vc64YgQ8zX","xOffset":0,"yOffset":0,"rotateXPos":295,"rotateYPos":28.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":592,"bottom":59,"altText":"Generative AI can discern truth and understands that what it’s saying is true.","pngfb":false,"pr":{"l":"Lib","i":207}},"html5data":{"xPos":-1,"yPos":-1,"width":593,"height":60,"strokewidth":1}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":592,"bottom":59,"altText":"Generative AI can discern truth and understands that what it’s saying is true.","pngfb":false,"pr":{"l":"Lib","i":208}},"html5data":{"xPos":-1,"yPos":-1,"width":593,"height":60,"strokewidth":1}}}],"width":591,"height":58,"resume":true,"useHandCursor":true,"id":"5Vc64YgQ8zX","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savechecked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_tempStateNameBuilder","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savechecked","operator":"set","value":{"type":"var","value":"#_checked"}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savechecked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"adjustvar","variable":"_savechecked","operator":"set","value":{"type":"var","value":"#_checked"}},{"kind":"adjustvar","variable":"_checked","operator":"toggle"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"checkbox","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5mmcRY0Je0N_1472639784","id":"01","linkId":"txt__default_5aT7iER60m6","type":"acctext","xPos":7,"yPos":3,"xAccOffset":7,"yAccOffset":3,"width":577,"height":52,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Generative AI can help people with their learning ","style":{"fontFamily":"\\"Calibri Charset0_v2mWipD31519F7\\",\\"Calibri\\"","fontSize":13.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"elevation":"normal","displayCase":"asIs","foregroundColor":"#000000","linkColor":"#000000","ascent":17.139,"descent":4.834,"leading":0,"underlinePosition":-2.039,"underlineThickness":1.178,"xHeight":8.358}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"center","listLevel":1,"lineSpacingRule":"multiple","lineSpacing":20,"spacingBefore":0,"spacingAfter":0,"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100,"bulletChar":8226,"bulletFont":"Arial","bulletPicture":{"w":0,"h":0,"base64":0}},"tagType":"P"},"runs":[{"idx":0,"len":50,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Calibri","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0563C1"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":479,"bottom":40,"pngfb":false,"pr":{"l":"Lib","i":224}}}],"shapemaskId":"","xPos":197,"yPos":351,"tabIndex":7,"tabEnabled":true,"referenceName":"5aT7iER60m6","xOffset":0,"yOffset":0,"rotateXPos":295,"rotateYPos":28.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":592,"bottom":59,"altText":"Generative AI can help people with their learning ","pngfb":false,"pr":{"l":"Lib","i":207}},"html5data":{"xPos":-1,"yPos":-1,"width":593,"height":60,"strokewidth":1}},"states":[{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":592,"bottom":59,"altText":"Generative AI can help people with their learning ","pngfb":false,"pr":{"l":"Lib","i":208}},"html5data":{"xPos":-1,"yPos":-1,"width":593,"height":60,"strokewidth":1}}}],"width":591,"height":58,"resume":true,"useHandCursor":true,"id":"5aT7iER60m6","variables":[{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savechecked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"_tempStateNameBuilder","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savechecked","operator":"set","value":{"type":"var","value":"#_checked"}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savechecked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"adjustvar","variable":"_savechecked","operator":"set","value":{"type":"var","value":"#_checked"}},{"kind":"adjustvar","variable":"_checked","operator":"toggle"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6WBSdbElWWM_CorrectReview","id":"01","linkId":"6WBSdbElWWM_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":520,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":185}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":184}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"6WBSdbElWWM_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6WBSdbElWWM_IncorrectReview","id":"01","linkId":"6WBSdbElWWM_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":528,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":187}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":186}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"6WBSdbElWWM_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');