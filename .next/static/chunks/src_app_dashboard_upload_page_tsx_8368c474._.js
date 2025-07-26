(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/dashboard/upload/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>UploadPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function UploadPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadError, setUploadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UploadPage.useEffect": ()=>{
            // Simple auth check: check if token exists in localStorage
            const token = localStorage.getItem('enjoyable_token');
            if (!token) {
                router.push('/auth/login');
            }
        }
    }["UploadPage.useEffect"], [
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UploadPage.useEffect": ()=>{
            const div = dropRef.current;
            if (!div) return;
            const handleDragOver = {
                "UploadPage.useEffect.handleDragOver": (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    div.classList.add('border-black', 'bg-gray-100');
                }
            }["UploadPage.useEffect.handleDragOver"];
            const handleDragLeave = {
                "UploadPage.useEffect.handleDragLeave": (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    div.classList.remove('border-black', 'bg-gray-100');
                }
            }["UploadPage.useEffect.handleDragLeave"];
            const handleDrop = {
                "UploadPage.useEffect.handleDrop": (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    div.classList.remove('border-black', 'bg-gray-100');
                    if (e.dataTransfer?.files) {
                        const filesArray = Array.from(e.dataTransfer.files).filter({
                            "UploadPage.useEffect.handleDrop.filesArray": (file)=>[
                                    'video/',
                                    'image/',
                                    'audio/'
                                ].some({
                                    "UploadPage.useEffect.handleDrop.filesArray": (type)=>file.type.startsWith(type)
                                }["UploadPage.useEffect.handleDrop.filesArray"])
                        }["UploadPage.useEffect.handleDrop.filesArray"]);
                        setSelectedFiles(filesArray);
                    }
                }
            }["UploadPage.useEffect.handleDrop"];
            div.addEventListener('dragover', handleDragOver);
            div.addEventListener('dragleave', handleDragLeave);
            div.addEventListener('drop', handleDrop);
            return ({
                "UploadPage.useEffect": ()=>{
                    div.removeEventListener('dragover', handleDragOver);
                    div.removeEventListener('dragleave', handleDragLeave);
                    div.removeEventListener('drop', handleDrop);
                }
            })["UploadPage.useEffect"];
        }
    }["UploadPage.useEffect"], []);
    async function handleUpload() {
        if (selectedFiles.length === 0) {
            setUploadError('Please select files to upload');
            return;
        }
        if (description.trim().split(/\s+/).length > 1000) {
            setUploadError('Description cannot exceed 1000 words');
            return;
        }
        setUploadError('');
        setUploading(true);
        setUploadProgress(0);
        try {
            const formData = new FormData();
            selectedFiles.forEach((file)=>{
                formData.append('file', file);
            });
            formData.append('description', description);
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/api/videos/upload');
            xhr.upload.onprogress = (event)=>{
                if (event.lengthComputable) {
                    const percentComplete = Math.round(event.loaded / event.total * 100);
                    setUploadProgress(percentComplete);
                }
            };
            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    setSelectedFiles([]);
                    setDescription('');
                    if (fileInputRef.current) {
                        fileInputRef.current.value = '';
                    }
                    setUploadProgress(0);
                    setUploading(false);
                } else {
                    setUploadError('Error uploading files');
                    setUploading(false);
                }
            };
            xhr.onerror = ()=>{
                setUploadError('Error uploading files');
                setUploading(false);
            };
            xhr.send(formData);
        } catch (err) {
            setUploadError('Error uploading files');
            setUploading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-extrabold mb-6 text-black",
                children: "Upload Files"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/upload/page.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            uploadError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-600 mb-4",
                children: uploadError
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/upload/page.tsx",
                lineNumber: 121,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dropRef,
                className: "mb-4 p-6 border-2 border-dashed border-gray-400 rounded cursor-pointer text-center text-gray-600 hover:border-black transition",
                onClick: ()=>fileInputRef.current?.click(),
                children: [
                    "Drag & drop video, image, or audio files here or click to select files",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: "video/*,image/*,audio/*",
                        multiple: true,
                        onChange: (e)=>{
                            if (e.target.files) {
                                const filesArray = Array.from(e.target.files).filter((file)=>[
                                        'video/',
                                        'image/',
                                        'audio/'
                                    ].some((type)=>file.type.startsWith(type)));
                                setSelectedFiles(filesArray);
                            }
                        },
                        ref: fileInputRef,
                        className: "hidden"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/upload/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/upload/page.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: description,
                onChange: (e)=>setDescription(e.target.value),
                placeholder: "Write a description (max 1000 words)",
                className: "w-full p-2 border border-gray-300 rounded mb-4 resize-none",
                rows: 6
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/upload/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            selectedFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-black mb-2",
                        children: "Selected Files:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/upload/page.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc list-inside text-gray-800 max-h-32 overflow-y-auto",
                        children: selectedFiles.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: file.name
                            }, index, false, {
                                fileName: "[project]/src/app/dashboard/upload/page.tsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/upload/page.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/upload/page.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this),
            uploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-gray-200 rounded-full h-4 mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black h-4 rounded-full transition-all",
                    style: {
                        width: `${uploadProgress}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/upload/page.tsx",
                    lineNumber: 167,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/upload/page.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleUpload,
                disabled: uploading,
                className: "bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 disabled:opacity-50 transition",
                children: uploading ? `Uploading... ${uploadProgress}%` : 'Upload Files'
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/upload/page.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/upload/page.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s(UploadPage, "k6ymW6G2u24PXoHM8Oa09CSCmtY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UploadPage;
var _c;
__turbopack_context__.k.register(_c, "UploadPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_dashboard_upload_page_tsx_8368c474._.js.map