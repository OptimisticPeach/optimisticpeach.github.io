/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/sailer_web_bg.wasm": function() {
/******/ 			return {
/******/ 				"./sailer_web_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_abda76e883ba8a5f": function() {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_new_abda76e883ba8a5f"]();
/******/ 					},
/******/ 					"__wbg_stack_658279fe44541cf6": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_stack_658279fe44541cf6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_f851667af71bcfc6": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_error_f851667af71bcfc6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_number_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_number_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbg_Window_7f130092cf0167e1": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_Window_7f130092cf0167e1"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_WorkerGlobalScope_97620b929b495843": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_WorkerGlobalScope_97620b929b495843"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_number_new": function(p0f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_number_new"](p0f64);
/******/ 					},
/******/ 					"__wbg_queueMicrotask_4d890031a6a5a50c": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_queueMicrotask_4d890031a6a5a50c"](p0i32);
/******/ 					},
/******/ 					"__wbg_queueMicrotask_adae4bc085237231": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_queueMicrotask_adae4bc085237231"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_9029196b662bc42a": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_instanceof_Window_9029196b662bc42a"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_f7ace2b956f30a4f": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_document_f7ace2b956f30a4f"](p0i32);
/******/ 					},
/******/ 					"__wbg_navigator_7c9103698acde322": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_navigator_7c9103698acde322"](p0i32);
/******/ 					},
/******/ 					"__wbg_innerWidth_ebe07ce5463ff293": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_innerWidth_ebe07ce5463ff293"](p0i32);
/******/ 					},
/******/ 					"__wbg_innerHeight_2dd06d8cf68f1d7d": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_innerHeight_2dd06d8cf68f1d7d"](p0i32);
/******/ 					},
/******/ 					"__wbg_devicePixelRatio_f9de7bddca0eaf20": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_devicePixelRatio_f9de7bddca0eaf20"](p0i32);
/******/ 					},
/******/ 					"__wbg_matchMedia_12ef69056e32d0b3": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_matchMedia_12ef69056e32d0b3"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_get_cb7c1c2da725c920": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_get_cb7c1c2da725c920"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_cancelAnimationFrame_9b68e9588c6543bc": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_cancelAnimationFrame_9b68e9588c6543bc"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_requestAnimationFrame_d082200514b6674d": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_requestAnimationFrame_d082200514b6674d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_clearTimeout_220be2fa0577b342": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_clearTimeout_220be2fa0577b342"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setTimeout_eb1a0d116c26d9f6": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setTimeout_eb1a0d116c26d9f6"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getBoundingClientRect_ac9db8cf97ca8083": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_getBoundingClientRect_ac9db8cf97ca8083"](p0i32);
/******/ 					},
/******/ 					"__wbg_requestFullscreen_3545278bcd44910c": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_requestFullscreen_3545278bcd44910c"](p0i32);
/******/ 					},
/******/ 					"__wbg_setAttribute_e7e80b478b7b8b2f": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setAttribute_e7e80b478b7b8b2f"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_setPointerCapture_e7c29336490bba19": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setPointerCapture_e7c29336490bba19"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_fullscreenElement_07d5b77ef6c958c1": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_fullscreenElement_07d5b77ef6c958c1"](p0i32);
/******/ 					},
/******/ 					"__wbg_createElement_4891554b28d3388b": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_createElement_4891554b28d3388b"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getElementById_cc0e0d931b0d9a28": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_getElementById_cc0e0d931b0d9a28"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_querySelectorAll_c03e8664a5a0f0c5": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_querySelectorAll_c03e8664a5a0f0c5"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_style_3801009b2339aa94": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_style_3801009b2339aa94"](p0i32);
/******/ 					},
/******/ 					"__wbg_navigator_41bd88b80ed4685e": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_navigator_41bd88b80ed4685e"](p0i32);
/******/ 					},
/******/ 					"__wbg_target_f171e89c61e2bccf": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_target_f171e89c61e2bccf"](p0i32);
/******/ 					},
/******/ 					"__wbg_cancelBubble_90d1c3aa2a76cbeb": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_cancelBubble_90d1c3aa2a76cbeb"](p0i32);
/******/ 					},
/******/ 					"__wbg_preventDefault_24104f3f0a54546a": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_preventDefault_24104f3f0a54546a"](p0i32);
/******/ 					},
/******/ 					"__wbg_stopPropagation_55539cfa2506c867": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_stopPropagation_55539cfa2506c867"](p0i32);
/******/ 					},
/******/ 					"__wbg_dispatchWorkgroups_c484cd3530a3801d": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_dispatchWorkgroups_c484cd3530a3801d"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_dispatchWorkgroupsIndirect_2b89ee1731fab5f8": function(p0i32,p1i32,p2f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_dispatchWorkgroupsIndirect_2b89ee1731fab5f8"](p0i32,p1i32,p2f64);
/******/ 					},
/******/ 					"__wbg_end_dab719019df5969c": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_end_dab719019df5969c"](p0i32);
/******/ 					},
/******/ 					"__wbg_setPipeline_598117fdeb73cf8f": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setPipeline_598117fdeb73cf8f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setBindGroup_dffce83253968cdd": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5f64,p6i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setBindGroup_dffce83253968cdd"](p0i32,p1i32,p2i32,p3i32,p4i32,p5f64,p6i32);
/******/ 					},
/******/ 					"__wbg_charCode_75cea1a3a6d66388": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_charCode_75cea1a3a6d66388"](p0i32);
/******/ 					},
/******/ 					"__wbg_keyCode_dfa86be31f5ef90c": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_keyCode_dfa86be31f5ef90c"](p0i32);
/******/ 					},
/******/ 					"__wbg_altKey_612289acf855835c": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_altKey_612289acf855835c"](p0i32);
/******/ 					},
/******/ 					"__wbg_ctrlKey_582686fb2263dd3c": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_ctrlKey_582686fb2263dd3c"](p0i32);
/******/ 					},
/******/ 					"__wbg_shiftKey_48e8701355d8e2d4": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_shiftKey_48e8701355d8e2d4"](p0i32);
/******/ 					},
/******/ 					"__wbg_metaKey_43193b7cc99f8914": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_metaKey_43193b7cc99f8914"](p0i32);
/******/ 					},
/******/ 					"__wbg_key_8aeaa079126a9cc7": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_key_8aeaa079126a9cc7"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_code_96d6322b968b2d17": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_code_96d6322b968b2d17"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getModifierState_5102ee8843516d2f": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_getModifierState_5102ee8843516d2f"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_copyExternalImageToTexture_819ec294d299f624": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_copyExternalImageToTexture_819ec294d299f624"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_submit_3104e9b014f75846": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_submit_3104e9b014f75846"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_writeBuffer_becf0c8f0323ffd7": function(p0i32,p1i32,p2f64,p3i32,p4f64,p5f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_writeBuffer_becf0c8f0323ffd7"](p0i32,p1i32,p2f64,p3i32,p4f64,p5f64);
/******/ 					},
/******/ 					"__wbg_writeTexture_465ecc6146e5052c": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_writeTexture_465ecc6146e5052c"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_getBindGroupLayout_dfc1b97f78c04beb": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_getBindGroupLayout_dfc1b97f78c04beb"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_GpuCanvasContext_7a77e275c38d41d8": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_instanceof_GpuCanvasContext_7a77e275c38d41d8"](p0i32);
/******/ 					},
/******/ 					"__wbg_configure_93a57a4e5e0f8bcf": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_configure_93a57a4e5e0f8bcf"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getCurrentTexture_ecedc4f6f71990d2": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_getCurrentTexture_ecedc4f6f71990d2"](p0i32);
/******/ 					},
/******/ 					"__wbg_gpu_24536c9523d924b1": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_gpu_24536c9523d924b1"](p0i32);
/******/ 					},
/******/ 					"__wbg_inlineSize_9394a3057e5da0ae": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_inlineSize_9394a3057e5da0ae"](p0i32);
/******/ 					},
/******/ 					"__wbg_blockSize_389e379c0494897e": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_blockSize_389e379c0494897e"](p0i32);
/******/ 					},
/******/ 					"__wbg_getBindGroupLayout_20dc45d52b96fa42": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_getBindGroupLayout_20dc45d52b96fa42"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_GpuOutOfMemoryError_45166ef4e2774fbe": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_instanceof_GpuOutOfMemoryError_45166ef4e2774fbe"](p0i32);
/******/ 					},
/******/ 					"__wbg_features_dfb2178c91fa1dd7": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_features_dfb2178c91fa1dd7"](p0i32);
/******/ 					},
/******/ 					"__wbg_limits_45ceb777867eb768": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_limits_45ceb777867eb768"](p0i32);
/******/ 					},
/******/ 					"__wbg_queue_f2aeb5c277e56f93": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_queue_f2aeb5c277e56f93"](p0i32);
/******/ 					},
/******/ 					"__wbg_setonuncapturederror_b3c814f611d5e585": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setonuncapturederror_b3c814f611d5e585"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createBindGroup_fa5515d52f9c6a69": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_createBindGroup_fa5515d52f9c6a69"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createBindGroupLayout_af3b9d9ee0a1f5f9": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_createBindGroupLayout_af3b9d9ee0a1f5f9"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createBuffer_36e159f52cc644a7": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_createBuffer_36e159f52cc644a7"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createCommandEncoder_a50a1dab2b499b95": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_createCommandEncoder_a50a1dab2b499b95"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createComputePipeline_89131452dfd12672": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_createComputePipeline_89131452dfd12672"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createPipelineLayout_1e10c8281fb85c01": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_createPipelineLayout_1e10c8281fb85c01"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createQuerySet_ccb746122176f8e5": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_createQuerySet_ccb746122176f8e5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createRenderBundleEncoder_ad2d0237f581427b": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_createRenderBundleEncoder_ad2d0237f581427b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createRenderPipeline_745f00bcb1ca6edf": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_createRenderPipeline_745f00bcb1ca6edf"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createSampler_09cd36835c9befb3": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_createSampler_09cd36835c9befb3"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createShaderModule_59bbf537b8b5cf7c": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_createShaderModule_59bbf537b8b5cf7c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createTexture_dbd00b550944125c": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_createTexture_dbd00b550944125c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_popErrorScope_19075fb98a08b740": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_popErrorScope_19075fb98a08b740"](p0i32);
/******/ 					},
/******/ 					"__wbg_pushErrorScope_0728aae3f2d3ed48": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_pushErrorScope_0728aae3f2d3ed48"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_end_bdfb66792e0c59a2": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_end_bdfb66792e0c59a2"](p0i32);
/******/ 					},
/******/ 					"__wbg_executeBundles_0a1fdfd83c1a3e57": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_executeBundles_0a1fdfd83c1a3e57"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setBlendConstant_e89574db5137b2f6": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setBlendConstant_e89574db5137b2f6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setScissorRect_0af8c89e90a6e89c": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setScissorRect_0af8c89e90a6e89c"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_setStencilReference_71be0db67db2f7ab": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setStencilReference_71be0db67db2f7ab"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setViewport_9c5fb686baf1cf4f": function(p0i32,p1f32,p2f32,p3f32,p4f32,p5f32,p6f32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setViewport_9c5fb686baf1cf4f"](p0i32,p1f32,p2f32,p3f32,p4f32,p5f32,p6f32);
/******/ 					},
/******/ 					"__wbg_setBindGroup_ce4432036922cd83": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5f64,p6i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setBindGroup_ce4432036922cd83"](p0i32,p1i32,p2i32,p3i32,p4i32,p5f64,p6i32);
/******/ 					},
/******/ 					"__wbg_draw_6357a5fbc8a6b097": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_draw_6357a5fbc8a6b097"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_drawIndexed_5d1dd89d7375148c": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_drawIndexed_5d1dd89d7375148c"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32);
/******/ 					},
/******/ 					"__wbg_drawIndexedIndirect_526599171cfbbee5": function(p0i32,p1i32,p2f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_drawIndexedIndirect_526599171cfbbee5"](p0i32,p1i32,p2f64);
/******/ 					},
/******/ 					"__wbg_drawIndirect_8dd595dc622e21ac": function(p0i32,p1i32,p2f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_drawIndirect_8dd595dc622e21ac"](p0i32,p1i32,p2f64);
/******/ 					},
/******/ 					"__wbg_setIndexBuffer_1f4a86d1cc8c16d9": function(p0i32,p1i32,p2i32,p3f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setIndexBuffer_1f4a86d1cc8c16d9"](p0i32,p1i32,p2i32,p3f64);
/******/ 					},
/******/ 					"__wbg_setIndexBuffer_9f8493460611f96b": function(p0i32,p1i32,p2i32,p3f64,p4f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setIndexBuffer_9f8493460611f96b"](p0i32,p1i32,p2i32,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_setPipeline_18ce556bdea62cc5": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setPipeline_18ce556bdea62cc5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setVertexBuffer_2a2c84d65c1063f9": function(p0i32,p1i32,p2i32,p3f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setVertexBuffer_2a2c84d65c1063f9"](p0i32,p1i32,p2i32,p3f64);
/******/ 					},
/******/ 					"__wbg_setVertexBuffer_176c2dff823c42c1": function(p0i32,p1i32,p2i32,p3f64,p4f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setVertexBuffer_176c2dff823c42c1"](p0i32,p1i32,p2i32,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_matches_07c564b5b4101cf2": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_matches_07c564b5b4101cf2"](p0i32);
/******/ 					},
/******/ 					"__wbg_addListener_85fb6e4bd17e8878": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_addListener_85fb6e4bd17e8878"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_removeListener_3b62020874cfc3c7": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_removeListener_3b62020874cfc3c7"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_pointerId_701aab7b4fb073ff": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_pointerId_701aab7b4fb073ff"](p0i32);
/******/ 					},
/******/ 					"__wbg_pressure_e388b6fd623a3917": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_pressure_e388b6fd623a3917"](p0i32);
/******/ 					},
/******/ 					"__wbg_pointerType_0009b1e4e6b0f428": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_pointerType_0009b1e4e6b0f428"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_deltaX_84508d00a1050e70": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_deltaX_84508d00a1050e70"](p0i32);
/******/ 					},
/******/ 					"__wbg_deltaY_64823169afb0335d": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_deltaY_64823169afb0335d"](p0i32);
/******/ 					},
/******/ 					"__wbg_deltaMode_1c680147cfdba8a5": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_deltaMode_1c680147cfdba8a5"](p0i32);
/******/ 					},
/******/ 					"__wbg_requestAdapter_d8298d7a27a391f0": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_requestAdapter_d8298d7a27a391f0"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_has_8720889cf3ad610c": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_has_8720889cf3ad610c"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_maxTextureDimension1D_4d1ddb46ed9dc470": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxTextureDimension1D_4d1ddb46ed9dc470"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxTextureDimension2D_37a46e61490c8297": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxTextureDimension2D_37a46e61490c8297"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxTextureDimension3D_7e3a97204d211743": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxTextureDimension3D_7e3a97204d211743"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxTextureArrayLayers_fee4db585706a5eb": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxTextureArrayLayers_fee4db585706a5eb"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxBindGroups_dc8a5f97ba653c91": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxBindGroups_dc8a5f97ba653c91"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxBindingsPerBindGroup_3d5ab311420be5df": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxBindingsPerBindGroup_3d5ab311420be5df"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxDynamicUniformBuffersPerPipelineLayout_6b839b7dc97f34f0": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxDynamicUniformBuffersPerPipelineLayout_6b839b7dc97f34f0"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxDynamicStorageBuffersPerPipelineLayout_5328cd2b9d884831": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxDynamicStorageBuffersPerPipelineLayout_5328cd2b9d884831"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxSampledTexturesPerShaderStage_ac006b00cf776b4a": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxSampledTexturesPerShaderStage_ac006b00cf776b4a"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxSamplersPerShaderStage_dc092d6a272be20a": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxSamplersPerShaderStage_dc092d6a272be20a"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxStorageBuffersPerShaderStage_dc5b58734b9ab932": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxStorageBuffersPerShaderStage_dc5b58734b9ab932"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxStorageTexturesPerShaderStage_2fec939cb0d5bbfd": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxStorageTexturesPerShaderStage_2fec939cb0d5bbfd"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxUniformBuffersPerShaderStage_b30d53cbf89caeae": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxUniformBuffersPerShaderStage_b30d53cbf89caeae"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxUniformBufferBindingSize_eec576e1342504b5": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxUniformBufferBindingSize_eec576e1342504b5"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxStorageBufferBindingSize_1ef0cc5e43dad09b": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxStorageBufferBindingSize_1ef0cc5e43dad09b"](p0i32);
/******/ 					},
/******/ 					"__wbg_minUniformBufferOffsetAlignment_3af8c32faa30c5d8": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_minUniformBufferOffsetAlignment_3af8c32faa30c5d8"](p0i32);
/******/ 					},
/******/ 					"__wbg_minStorageBufferOffsetAlignment_766ef8ea8f9fe6e1": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_minStorageBufferOffsetAlignment_766ef8ea8f9fe6e1"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxVertexBuffers_b4d31be9e3f93990": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxVertexBuffers_b4d31be9e3f93990"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxBufferSize_2d8398a691b9a8ce": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxBufferSize_2d8398a691b9a8ce"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxVertexAttributes_904c5eb19a6f6c65": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxVertexAttributes_904c5eb19a6f6c65"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxVertexBufferArrayStride_6800975c373d83bc": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxVertexBufferArrayStride_6800975c373d83bc"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxInterStageShaderComponents_b9f179b1cde06d08": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxInterStageShaderComponents_b9f179b1cde06d08"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxComputeWorkgroupStorageSize_9318e498283b79fb": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxComputeWorkgroupStorageSize_9318e498283b79fb"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxComputeInvocationsPerWorkgroup_2bfea723194ac5a0": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxComputeInvocationsPerWorkgroup_2bfea723194ac5a0"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxComputeWorkgroupSizeX_91fc9ba04de4148f": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxComputeWorkgroupSizeX_91fc9ba04de4148f"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxComputeWorkgroupSizeY_9052627dce4a7d1f": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxComputeWorkgroupSizeY_9052627dce4a7d1f"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxComputeWorkgroupSizeZ_45a1a82f8446a750": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxComputeWorkgroupSizeZ_45a1a82f8446a750"](p0i32);
/******/ 					},
/******/ 					"__wbg_maxComputeWorkgroupsPerDimension_100ee7392cc04c20": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_maxComputeWorkgroupsPerDimension_100ee7392cc04c20"](p0i32);
/******/ 					},
/******/ 					"__wbg_now_0cfdc90c97d0c24b": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_now_0cfdc90c97d0c24b"](p0i32);
/******/ 					},
/******/ 					"__wbg_debug_9b8701f894da9929": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_debug_9b8701f894da9929"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_error_c9309504864e78b5": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_error_c9309504864e78b5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_d9bce418caafb712": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_error_d9bce418caafb712"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_info_bb52f40b06f679de": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_info_bb52f40b06f679de"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_log_ea7093e35e3efd07": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_log_ea7093e35e3efd07"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_warn_dfc0e0cf544a13bd": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_warn_dfc0e0cf544a13bd"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_x_6c8af74c3b4d8c09": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_x_6c8af74c3b4d8c09"](p0i32);
/******/ 					},
/******/ 					"__wbg_y_4cca2672ce1b5fc1": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_y_4cca2672ce1b5fc1"](p0i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_5651108fc3ffeb6e": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_addEventListener_5651108fc3ffeb6e"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_a5963e26cd7b176b": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_addEventListener_a5963e26cd7b176b"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_removeEventListener_1fa0d9594cdb0b1d": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_removeEventListener_1fa0d9594cdb0b1d"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_instanceof_GpuAdapter_c0a5a310603ba618": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_instanceof_GpuAdapter_c0a5a310603ba618"](p0i32);
/******/ 					},
/******/ 					"__wbg_features_88901f43932fb28e": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_features_88901f43932fb28e"](p0i32);
/******/ 					},
/******/ 					"__wbg_limits_a7f3fbf58768b61f": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_limits_a7f3fbf58768b61f"](p0i32);
/******/ 					},
/******/ 					"__wbg_requestDevice_068e794820eb88eb": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_requestDevice_068e794820eb88eb"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_size_6540ddb49e0d7120": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_size_6540ddb49e0d7120"](p0i32);
/******/ 					},
/******/ 					"__wbg_usage_f5b34f3e0170424b": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_usage_f5b34f3e0170424b"](p0i32);
/******/ 					},
/******/ 					"__wbg_destroy_9b5398e5b148e210": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_destroy_9b5398e5b148e210"](p0i32);
/******/ 					},
/******/ 					"__wbg_getMappedRange_becef7e3d9dc5489": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_getMappedRange_becef7e3d9dc5489"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_mapAsync_91acdcf41b7ae21d": function(p0i32,p1i32,p2f64,p3f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_mapAsync_91acdcf41b7ae21d"](p0i32,p1i32,p2f64,p3f64);
/******/ 					},
/******/ 					"__wbg_unmap_1677c09514e08e64": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_unmap_1677c09514e08e64"](p0i32);
/******/ 					},
/******/ 					"__wbg_label_c7970304720cf8b0": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_label_c7970304720cf8b0"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_beginComputePass_579a2563c561da68": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_beginComputePass_579a2563c561da68"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_beginRenderPass_d04327f7231bd5af": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_beginRenderPass_d04327f7231bd5af"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_clearBuffer_c370e7adb8398388": function(p0i32,p1i32,p2f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_clearBuffer_c370e7adb8398388"](p0i32,p1i32,p2f64);
/******/ 					},
/******/ 					"__wbg_clearBuffer_b8e6751290709d43": function(p0i32,p1i32,p2f64,p3f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_clearBuffer_b8e6751290709d43"](p0i32,p1i32,p2f64,p3f64);
/******/ 					},
/******/ 					"__wbg_copyBufferToBuffer_79ac12f409453cf0": function(p0i32,p1i32,p2f64,p3i32,p4f64,p5f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_copyBufferToBuffer_79ac12f409453cf0"](p0i32,p1i32,p2f64,p3i32,p4f64,p5f64);
/******/ 					},
/******/ 					"__wbg_copyBufferToTexture_ac956e6d47c24e73": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_copyBufferToTexture_ac956e6d47c24e73"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_copyTextureToBuffer_787ec8d8c4c216f1": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_copyTextureToBuffer_787ec8d8c4c216f1"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_copyTextureToTexture_a86e849469b0ef38": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_copyTextureToTexture_a86e849469b0ef38"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_finish_5153789564a5eee5": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_finish_5153789564a5eee5"](p0i32);
/******/ 					},
/******/ 					"__wbg_finish_d1049a13335e8326": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_finish_d1049a13335e8326"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_resolveQuerySet_8ac49c71e15cdf6a": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_resolveQuerySet_8ac49c71e15cdf6a"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32);
/******/ 					},
/******/ 					"__wbg_writeTimestamp_107647519ce52436": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_writeTimestamp_107647519ce52436"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_finish_863657abae52896e": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_finish_863657abae52896e"](p0i32);
/******/ 					},
/******/ 					"__wbg_finish_e580ef236d53f04b": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_finish_e580ef236d53f04b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setBindGroup_6bc8944422dbb3cd": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5f64,p6i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setBindGroup_6bc8944422dbb3cd"](p0i32,p1i32,p2i32,p3i32,p4i32,p5f64,p6i32);
/******/ 					},
/******/ 					"__wbg_draw_3958097471a10642": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_draw_3958097471a10642"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_drawIndexed_8856cc4ccffa3498": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_drawIndexed_8856cc4ccffa3498"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32);
/******/ 					},
/******/ 					"__wbg_drawIndexedIndirect_0404fa6cb9a6db25": function(p0i32,p1i32,p2f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_drawIndexedIndirect_0404fa6cb9a6db25"](p0i32,p1i32,p2f64);
/******/ 					},
/******/ 					"__wbg_drawIndirect_95c6eb1494a44d06": function(p0i32,p1i32,p2f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_drawIndirect_95c6eb1494a44d06"](p0i32,p1i32,p2f64);
/******/ 					},
/******/ 					"__wbg_setIndexBuffer_4dc5432dc348458d": function(p0i32,p1i32,p2i32,p3f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setIndexBuffer_4dc5432dc348458d"](p0i32,p1i32,p2i32,p3f64);
/******/ 					},
/******/ 					"__wbg_setIndexBuffer_f3bae4da9e407eaf": function(p0i32,p1i32,p2i32,p3f64,p4f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setIndexBuffer_f3bae4da9e407eaf"](p0i32,p1i32,p2i32,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_setPipeline_66f1e900256fc946": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setPipeline_66f1e900256fc946"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setVertexBuffer_c782d133fd439184": function(p0i32,p1i32,p2i32,p3f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setVertexBuffer_c782d133fd439184"](p0i32,p1i32,p2i32,p3f64);
/******/ 					},
/******/ 					"__wbg_setVertexBuffer_4da0a96267ce82db": function(p0i32,p1i32,p2i32,p3f64,p4f64) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setVertexBuffer_4da0a96267ce82db"](p0i32,p1i32,p2i32,p3f64,p4f64);
/******/ 					},
/******/ 					"__wbg_matches_0f7e350783b542c2": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_matches_0f7e350783b542c2"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_9d3e795dcd24a5d9": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_new_9d3e795dcd24a5d9"](p0i32);
/******/ 					},
/******/ 					"__wbg_observe_e3e06d8e2ad2b89c": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_observe_e3e06d8e2ad2b89c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setProperty_b95ef63ab852879e": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setProperty_b95ef63ab852879e"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_instanceof_GpuValidationError_af2aa2e306669317": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_instanceof_GpuValidationError_af2aa2e306669317"](p0i32);
/******/ 					},
/******/ 					"__wbg_width_2931aaedd21f1fff": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_width_2931aaedd21f1fff"](p0i32);
/******/ 					},
/******/ 					"__wbg_setwidth_a667a942dba6656e": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setwidth_a667a942dba6656e"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_height_0d36fbbeb60b0661": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_height_0d36fbbeb60b0661"](p0i32);
/******/ 					},
/******/ 					"__wbg_setheight_a747d440760fe5aa": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setheight_a747d440760fe5aa"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getContext_7c5944ea807bf5d3": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_getContext_7c5944ea807bf5d3"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_setwidth_15266a5e81f43cf0": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setwidth_15266a5e81f43cf0"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setheight_2e9bab573f1775a6": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_setheight_2e9bab573f1775a6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createView_3e46af1f54fdcd1f": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_createView_3e46af1f54fdcd1f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_destroy_728f676d96e34538": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_destroy_728f676d96e34538"](p0i32);
/******/ 					},
/******/ 					"__wbg_clientX_1a480606ab0cabaa": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_clientX_1a480606ab0cabaa"](p0i32);
/******/ 					},
/******/ 					"__wbg_clientY_9c7878f7faf3900f": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_clientY_9c7878f7faf3900f"](p0i32);
/******/ 					},
/******/ 					"__wbg_offsetX_5a58f16f6c3a41b6": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_offsetX_5a58f16f6c3a41b6"](p0i32);
/******/ 					},
/******/ 					"__wbg_offsetY_c45b4956f6429a95": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_offsetY_c45b4956f6429a95"](p0i32);
/******/ 					},
/******/ 					"__wbg_ctrlKey_0a805df688b5bf42": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_ctrlKey_0a805df688b5bf42"](p0i32);
/******/ 					},
/******/ 					"__wbg_shiftKey_8a070ab6169b5fa4": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_shiftKey_8a070ab6169b5fa4"](p0i32);
/******/ 					},
/******/ 					"__wbg_altKey_6fc1761a6b7a406e": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_altKey_6fc1761a6b7a406e"](p0i32);
/******/ 					},
/******/ 					"__wbg_metaKey_d89287be4389a3c1": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_metaKey_d89287be4389a3c1"](p0i32);
/******/ 					},
/******/ 					"__wbg_button_7a095234b69de930": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_button_7a095234b69de930"](p0i32);
/******/ 					},
/******/ 					"__wbg_buttons_d0f40e1650e3fa28": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_buttons_d0f40e1650e3fa28"](p0i32);
/******/ 					},
/******/ 					"__wbg_movementX_966ec323c169d1a6": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_movementX_966ec323c169d1a6"](p0i32);
/******/ 					},
/******/ 					"__wbg_movementY_b14b3bc8e1b31f23": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_movementY_b14b3bc8e1b31f23"](p0i32);
/******/ 					},
/******/ 					"__wbg_borderBoxSize_a7a8901485201671": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_borderBoxSize_a7a8901485201671"](p0i32);
/******/ 					},
/******/ 					"__wbg_message_c934153af8567cdb": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_message_c934153af8567cdb"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_f85e77a2651e41dc": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_error_f85e77a2651e41dc"](p0i32);
/******/ 					},
/******/ 					"__wbg_get_c77649dd3862b63a": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_get_c77649dd3862b63a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_gpu_1678673f109c8aeb": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_gpu_1678673f109c8aeb"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_ffc6d4d085022169": function() {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_new_ffc6d4d085022169"]();
/******/ 					},
/******/ 					"__wbg_newnoargs_c62ea9419c21fbac": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_newnoargs_c62ea9419c21fbac"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_get_7b48513de5dc5ea4": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_get_7b48513de5dc5ea4"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_90c26b09837aba1c": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_call_90c26b09837aba1c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_9fb8d994e1c0aaac": function() {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_new_9fb8d994e1c0aaac"]();
/******/ 					},
/******/ 					"__wbg_self_f0e34d89f33b99fd": function() {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_self_f0e34d89f33b99fd"]();
/******/ 					},
/******/ 					"__wbg_window_d3b084224f4774d7": function() {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_window_d3b084224f4774d7"]();
/******/ 					},
/******/ 					"__wbg_globalThis_9caa27ff917c6860": function() {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_globalThis_9caa27ff917c6860"]();
/******/ 					},
/******/ 					"__wbg_global_35dfdd59a4da3e74": function() {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_global_35dfdd59a4da3e74"]();
/******/ 					},
/******/ 					"__wbg_at_52fa04dd29154681": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_at_52fa04dd29154681"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_from_71add2e723d1f1b2": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_from_71add2e723d1f1b2"](p0i32);
/******/ 					},
/******/ 					"__wbg_push_901f3914205d44de": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_push_901f3914205d44de"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Object_702c4990f4c3db8d": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_instanceof_Object_702c4990f4c3db8d"](p0i32);
/******/ 					},
/******/ 					"__wbg_is_ff7acd231c75c0e4": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_is_ff7acd231c75c0e4"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_valueOf_cece5f88a709e1bd": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_valueOf_cece5f88a709e1bd"](p0i32);
/******/ 					},
/******/ 					"__wbg_resolve_6e1c6553a82f85b7": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_resolve_6e1c6553a82f85b7"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_3ab08cd4fbb91ae9": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_then_3ab08cd4fbb91ae9"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_then_8371cc12cfedc5a2": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_then_8371cc12cfedc5a2"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_buffer_a448f833075b71ba": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_buffer_a448f833075b71ba"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_d0482f893617af71": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_newwithbyteoffsetandlength_d0482f893617af71"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_8f67e318f15d7254": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_new_8f67e318f15d7254"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_2357bf09366ee480": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_set_2357bf09366ee480"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_1d25fa9e4ac21ce7": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_length_1d25fa9e4ac21ce7"](p0i32);
/******/ 					},
/******/ 					"__wbg_buffer_261f267c3396c59b": function(p0i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_buffer_261f267c3396c59b"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_759f75cd92b612d2": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbg_set_759f75cd92b612d2"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_memory"]();
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper517": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_closure_wrapper517"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper518": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_closure_wrapper518"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper521": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_closure_wrapper521"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper523": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_closure_wrapper523"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper525": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_closure_wrapper525"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper527": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_closure_wrapper527"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper529": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_closure_wrapper529"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper531": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_closure_wrapper531"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper533": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_closure_wrapper533"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper535": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_closure_wrapper535"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper2523": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_closure_wrapper2523"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper3941": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_closure_wrapper3941"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper3943": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_closure_wrapper3943"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper3958": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/sailer_web_bg.js"].exports["__wbindgen_closure_wrapper3958"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/sailer_web_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/sailer_web_bg.wasm":"1d40156b601d6bd63ee5"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\r\n// asynchronously. This `bootstrap.js` file does the single async import, so\r\n// that no one else needs to worry about it again.\r\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\r\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\r\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });