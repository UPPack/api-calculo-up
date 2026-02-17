<html lang="pt-BR"><head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculadora BCT - Compressão de Papelão</title>
  <script src="/_sdk/element_sdk.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
        body {
            box-sizing: border-box;
        }
       .gradient-bg {
    background: #D8B981; /* bege chapado */
}

        .glass-effect {
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(226, 232, 240, 0.5);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .input-focus:focus {
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        .result-animation {
            animation: slideIn 0.5s ease-out;
        }
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
  <script src="https://cdn.tailwindcss.com/3.4.17" type="text/javascript"></script>
  <script src="/_sdk/data_sdk.js" type="text/javascript"></script>
 <style>*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/* ! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com */*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::after,::before{--tw-content:''}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:0.25rem}.mb-2{margin-bottom:0.5rem}.mb-3{margin-bottom:0.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.mr-2{margin-right:0.5rem}.mr-3{margin-right:0.75rem}.mr-4{margin-right:1rem}.mt-1{margin-top:0.25rem}.mt-12{margin-top:3rem}.mt-8{margin-top:2rem}.block{display:block}.flex{display:flex}.grid{display:grid}.h-10{height:2.5rem}.h-12{height:3rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.min-h-full{min-height:100%}.w-10{width:2.5rem}.w-12{width:3rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-full{width:100%}.max-w-6xl{max-width:72rem}.items-center{align-items:center}.justify-center{justify-content:center}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.space-y-2 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.5rem * var(--tw-space-y-reverse))}.space-y-3 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.75rem * var(--tw-space-y-reverse))}.space-y-4 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-6 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:0.5rem}.rounded-xl{border-radius:0.75rem}.border{border-width:1px}.border-2{border-width:2px}.border-t{border-top-width:1px}.border-blue-200{--tw-border-opacity:1;border-color:rgb(191 219 254 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.border-green-200{--tw-border-opacity:1;border-color:rgb(187 247 208 / var(--tw-border-opacity, 1))}.border-red-200{--tw-border-opacity:1;border-color:rgb(254 202 202 / var(--tw-border-opacity, 1))}.bg-blue-50{--tw-bg-opacity:1;background-color:rgb(239 246 255 / var(--tw-bg-opacity, 1))}.bg-blue-500\/20{background-color:rgb(59 130 246 / 0.2)}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-green-500\/20{background-color:rgb(34 197 94 / 0.2)}.bg-orange-500\/20{background-color:rgb(249 115 22 / 0.2)}.bg-purple-300\/30{background-color:rgb(216 180 254 / 0.3)}.bg-red-50{--tw-bg-opacity:1;background-color:rgb(254 242 242 / var(--tw-bg-opacity, 1))}.bg-red-500\/20{background-color:rgb(239 68 68 / 0.2)}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-green-50{--tw-gradient-from:#f0fdf4 var(--tw-gradient-from-position);--tw-gradient-to:rgb(240 253 244 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.to-blue-50{--tw-gradient-to:#eff6ff var(--tw-gradient-to-position)}.p-3{padding:0.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.pt-6{padding-top:1.5rem}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:0.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.text-blue-600{--tw-text-opacity:1;color:rgb(37 99 235 / var(--tw-text-opacity, 1))}.text-blue-700{--tw-text-opacity:1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.text-blue-800{--tw-text-opacity:1;color:rgb(30 64 175 / var(--tw-text-opacity, 1))}.text-gray-300{--tw-text-opacity:1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-green-600{--tw-text-opacity:1;color:rgb(22 163 74 / var(--tw-text-opacity, 1))}.text-orange-600{--tw-text-opacity:1;color:rgb(234 88 12 / var(--tw-text-opacity, 1))}.text-purple-500{--tw-text-opacity:1;color:rgb(168 85 247 / var(--tw-text-opacity, 1))}.text-purple-600{--tw-text-opacity:1;color:rgb(147 51 234 / var(--tw-text-opacity, 1))}.text-red-600{--tw-text-opacity:1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.text-red-700{--tw-text-opacity:1;color:rgb(185 28 28 / var(--tw-text-opacity, 1))}.text-yellow-600{--tw-text-opacity:1;color:rgb(202 138 4 / var(--tw-text-opacity, 1))}.placeholder-gray-400::placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175 / var(--tw-placeholder-opacity, 1))}.opacity-60{opacity:0.6}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-300{transition-duration:300ms}.focus\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgb(59 130 246 / var(--tw-border-opacity, 1))}.focus\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width: 768px){.md\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.md\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}}@media (min-width: 1024px){.lg\:col-span-1{grid-column:span 1 / span 1}.lg\:col-span-2{grid-column:span 2 / span 2}.lg\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}}@media (min-width: 1280px){.xl\:col-span-2{grid-column:span 2 / span 2}.xl\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr))}}</style><style>*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/* ! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com */*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::after,::before{--tw-content:''}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:0.25rem}.mb-2{margin-bottom:0.5rem}.mb-3{margin-bottom:0.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.mr-2{margin-right:0.5rem}.mr-3{margin-right:0.75rem}.mr-4{margin-right:1rem}.mt-1{margin-top:0.25rem}.mt-12{margin-top:3rem}.mt-8{margin-top:2rem}.block{display:block}.flex{display:flex}.grid{display:grid}.h-10{height:2.5rem}.h-12{height:3rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.min-h-full{min-height:100%}.w-10{width:2.5rem}.w-12{width:3rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-full{width:100%}.max-w-6xl{max-width:72rem}.items-center{align-items:center}.justify-center{justify-content:center}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.space-y-2 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.5rem * var(--tw-space-y-reverse))}.space-y-3 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.75rem * var(--tw-space-y-reverse))}.space-y-4 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-6 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:0.5rem}.rounded-xl{border-radius:0.75rem}.border{border-width:1px}.border-2{border-width:2px}.border-t{border-top-width:1px}.border-blue-200{--tw-border-opacity:1;border-color:rgb(191 219 254 / var(--tw-border-opacity, 1))}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.border-green-200{--tw-border-opacity:1;border-color:rgb(187 247 208 / var(--tw-border-opacity, 1))}.border-red-200{--tw-border-opacity:1;border-color:rgb(254 202 202 / var(--tw-border-opacity, 1))}.bg-blue-50{--tw-bg-opacity:1;background-color:rgb(239 246 255 / var(--tw-bg-opacity, 1))}.bg-blue-500\/20{background-color:rgb(59 130 246 / 0.2)}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.bg-green-500\/20{background-color:rgb(34 197 94 / 0.2)}.bg-orange-500\/20{background-color:rgb(249 115 22 / 0.2)}.bg-purple-300\/30{background-color:rgb(216 180 254 / 0.3)}.bg-red-50{--tw-bg-opacity:1;background-color:rgb(254 242 242 / var(--tw-bg-opacity, 1))}.bg-red-500\/20{background-color:rgb(239 68 68 / 0.2)}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-green-50{--tw-gradient-from:#f0fdf4 var(--tw-gradient-from-position);--tw-gradient-to:rgb(240 253 244 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.to-blue-50{--tw-gradient-to:#eff6ff var(--tw-gradient-to-position)}.p-3{padding:0.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.pt-6{padding-top:1.5rem}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:0.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.text-blue-600{--tw-text-opacity:1;color:rgb(37 99 235 / var(--tw-text-opacity, 1))}.text-blue-700{--tw-text-opacity:1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.text-blue-800{--tw-text-opacity:1;color:rgb(30 64 175 / var(--tw-text-opacity, 1))}.text-gray-300{--tw-text-opacity:1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-green-600{--tw-text-opacity:1;color:rgb(22 163 74 / var(--tw-text-opacity, 1))}.text-orange-600{--tw-text-opacity:1;color:rgb(234 88 12 / var(--tw-text-opacity, 1))}.text-purple-500{--tw-text-opacity:1;color:rgb(168 85 247 / var(--tw-text-opacity, 1))}.text-purple-600{--tw-text-opacity:1;color:rgb(147 51 234 / var(--tw-text-opacity, 1))}.text-red-600{--tw-text-opacity:1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.text-red-700{--tw-text-opacity:1;color:rgb(185 28 28 / var(--tw-text-opacity, 1))}.text-yellow-600{--tw-text-opacity:1;color:rgb(202 138 4 / var(--tw-text-opacity, 1))}.placeholder-gray-400::placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175 / var(--tw-placeholder-opacity, 1))}.opacity-60{opacity:0.6}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-300{transition-duration:300ms}.focus\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgb(59 130 246 / var(--tw-border-opacity, 1))}.focus\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width: 768px){.md\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.md\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}}@media (min-width: 1024px){.lg\:col-span-1{grid-column:span 1 / span 1}.lg\:col-span-2{grid-column:span 2 / span 2}.lg\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}}@media (min-width: 1280px){.xl\:col-span-2{grid-column:span 2 / span 2}.xl\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr))}}</style></head>
 <body class="gradient-bg min-h-full">
  <main class="container mx-auto px-4 py-8 max-w-6xl"><!-- Header -->
   <header class="text-center mb-8">
    <h1 id="calculator-title" class="text-4xl font-bold text-[#ffffff] mb-4">
  Calculadora BCT - Compressão de Papelão
</h1>
    <p id="formula-label" class="text-lg text-white">
  Calcule a resistência à compressão com a fórmula BCT simplificada
</p>

   </header>
   <div class="grid xl:grid-cols-4 lg:grid-cols-3 gap-8"><!-- Coluna Esquerda - Inputs -->
    <div class="xl:col-span-2 lg:col-span-2 space-y-6"><!-- Parâmetros Básicos -->
     <div class="glass-effect rounded-2xl p-8">
      <div class="flex items-center mb-6">
       <div class="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
       </div>
       <h2 class="text-2xl font-semibold text-gray-800">Parâmetros Básicos</h2>
      </div><!-- Primeira linha: Tipo de Onda, Coluna Material, Espessura -->
      <div class="grid md:grid-cols-3 gap-6 mb-6"><!-- Tipo de Onda -->
       <div><label class="text-gray-700 font-medium mb-3 block"> Tipo de Onda </label>
        <div class="space-y-2"><label class="flex items-center"> <input type="radio" name="wave-type" value="5.87" class="mr-3 text-blue-600"> <span class="text-gray-700">Onda Simples</span> </label> <label class="flex items-center"> <input type="radio" name="wave-type" value="7" class="mr-3 text-blue-600"> <span class="text-gray-700">Onda Dupla</span> </label>
        </div>
       </div><!-- Coluna do Material -->
       <div><label for="material-column" class="text-gray-700 font-medium mb-2 block"> Coluna Material (kgf/cm) </label> <input type="number" id="material-column" step="0.01" min="0" class="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none input-focus transition-all duration-300" placeholder="Resistência do material">
       </div><!-- Espessura -->
       <div><label for="thickness" class="text-gray-700 font-medium mb-2 block"> Espessura (mm) </label> <input type="number" id="thickness" step="0.1" min="0" class="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none input-focus transition-all duration-300" placeholder="Espessura em mm">
       </div>
      </div><!-- Segunda linha: Dimensões (3 campos iguais) -->
      <div class="grid md:grid-cols-3 gap-6"><!-- Comprimento -->
       <div><label for="length" class="text-gray-700 font-medium mb-2 block"> Comprimento (cm) </label> <input type="number" id="length" step="0.1" min="0" class="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none input-focus transition-all duration-300" placeholder="Comprimento">
       </div><!-- Largura -->
       <div><label for="width" class="text-gray-700 font-medium mb-2 block"> Largura (cm) </label> <input type="number" id="width" step="0.1" min="0" class="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none input-focus transition-all duration-300" placeholder="Largura">
       </div><!-- Altura -->
       <div><label for="height" class="text-gray-700 font-medium mb-2 block"> Altura (cm) </label> <input type="number" id="height" step="0.1" min="0" class="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none input-focus transition-all duration-300" placeholder="Altura">
       </div>
      </div>
     </div><!-- Fatores de Segurança -->
     <div class="glass-effect rounded-2xl p-8">
      <div class="flex items-center mb-6">
       <div class="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4">
        <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
       </div>
       <h2 class="text-2xl font-semibold text-gray-800">Fatores de Segurança</h2>
      </div>
      <div class="grid md:grid-cols-2 gap-6"><!-- Coluna Esquerda -->
       <div class="space-y-4"><!-- Fator Umidade -->
        <div class="bg-gray-50 rounded-lg p-4">
         <h3 class="text-gray-800 font-medium mb-3">Fator Umidade</h3>
         <div class="space-y-2"><label class="flex items-center"> <input type="radio" name="humidity" value="0.9" class="mr-3 text-blue-600"> <span class="text-gray-700">Umidade Normal (50% a 70%)</span> </label> <label class="flex items-center"> <input type="radio" name="humidity" value="0.44" class="mr-3 text-blue-600"> <span class="text-gray-700">Umidade Alta (80% a 100%)</span> </label>
         </div>
        </div><!-- Fator Manuseio -->
        <div class="bg-gray-50 rounded-lg p-4">
         <h3 class="text-gray-800 font-medium mb-3">Fator Manuseio</h3>
         <div class="space-y-2"><label class="flex items-center"> <input type="radio" name="handling" value="0.8" class="mr-3 text-yellow-600"> <span class="text-gray-700">Manuseio Normal</span> </label> <label class="flex items-center"> <input type="radio" name="handling" value="0.6" class="mr-3 text-yellow-600"> <span class="text-gray-700">Manuseio Severo</span> </label>
         </div>
        </div><!-- Fator Empilhamento -->
        <div class="bg-gray-50 rounded-lg p-4">
         <h3 class="text-gray-800 font-medium mb-3">Fator Empilhamento</h3>
         <div class="space-y-2"><label class="flex items-center"> <input type="radio" name="stacking" value="1" class="mr-3 text-red-600"> <span class="text-gray-700">Empilhamento Colunar</span> </label> <label class="flex items-center"> <input type="radio" name="stacking" value="0.5" class="mr-3 text-red-600"> <span class="text-gray-700">Empilhamento Cruzado</span> </label>
         </div>
        </div>
       </div><!-- Coluna Direita -->
       <div class="space-y-4"><!-- Fator Estocagem -->
        <div class="bg-gray-50 rounded-lg p-4">
         <h3 class="text-gray-800 font-medium mb-3">Fator Tempo de Estocagem</h3>
         <div class="space-y-2"><label class="flex items-center"> <input type="radio" name="storage" value="0.63" class="mr-3 text-green-600"> <span class="text-gray-700">10 dias</span> </label> <label class="flex items-center"> <input type="radio" name="storage" value="0.6" class="mr-3 text-green-600"> <span class="text-gray-700">30 dias</span> </label> <label class="flex items-center"> <input type="radio" name="storage" value="0.55" class="mr-3 text-green-600"> <span class="text-gray-700">90 dias</span> </label> <label class="flex items-center"> <input type="radio" name="storage" value="0.5" class="mr-3 text-green-600"> <span class="text-gray-700">365 dias</span> </label>
         </div>
        </div><!-- Fator Produto -->
        <div class="bg-gray-50 rounded-lg p-4">
         <h3 class="text-gray-800 font-medium mb-3">Fator Características do Produto</h3>
         <div class="space-y-2"><label class="flex items-center"> <input type="radio" name="product" value="1.3" class="mr-3 text-purple-600"> <span class="text-gray-700">Produto Autossustentável</span> </label> <label class="flex items-center"> <input type="radio" name="product" value="1" class="mr-3 text-purple-600"> <span class="text-gray-700">Produto Não Sustentável</span> </label>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div><!-- Coluna Direita - Resultado e Empilhamento -->
    <div class="xl:col-span-2 lg:col-span-1 space-y-6"><!-- Resultado BCT -->
     <div class="glass-effect rounded-2xl p-6">
      <div class="flex items-center mb-6">
       <div class="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
       </div>
       <h2 class="text-xl font-semibold text-gray-800">Resultado BCT</h2>
      </div><!-- Result Display -->
      <div id="result-container" class="text-center" style="display: none;">
       <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6 border border-green-200">
        <h3 id="result-label" class="text-gray-600 font-medium mb-2">Resistência BCT Final:</h3>
        <div id="result-value" class="text-4xl font-bold text-gray-800 mb-2">
         0
        </div>
        <p class="text-gray-600 text-lg">kgf</p>
       </div><!-- Detalhes -->
       <div class="space-y-3">
        <div class="bg-gray-50 rounded-lg p-3 border border-gray-200">
         <p class="text-gray-500 text-sm">BCT Base (sem fatores)</p>
         <p class="text-gray-800 font-bold text-lg"><span id="bct-base">0</span> kgf</p>
        </div>
        <div class="bg-gray-50 rounded-lg p-3 border border-gray-200">
         <p class="text-gray-500 text-sm">Fator Total Aplicado</p>
         <p class="text-gray-800 font-bold text-lg"><span id="total-factor">0</span></p>
        </div>
       </div>
      </div><!-- Placeholder quando não calculado -->
      <div id="placeholder-result" class="text-center py-8">
       <div class="text-gray-300 mb-4">
        <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"></path>
        </svg>
       </div>
       <p class="text-gray-400 text-sm">Preencha os parâmetros para calcular o BCT</p>
      </div><!-- Error Message -->
      <div id="error-message" class="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-center" style="display: none;">
       <p class="font-medium">Erro no cálculo</p>
       <p class="text-sm mt-1">Por favor, preencha todos os campos obrigatórios e selecione um tipo de onda e um fator de cada categoria de segurança.</p>
      </div>
     </div><!-- Análise de Empilhamento -->
     <div class="glass-effect rounded-2xl p-6"><!-- Controles de Peso e Empilhamento -->
      <div>
       <div class="flex items-center mb-6">
        <div class="w-10 h-10 bg-purple-300/30 rounded-full flex items-center justify-center mr-3">
         <svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1"></path>
         </svg>
        </div>
        <h2 class="text-xl font-semibold text-gray-800">Empilhamento</h2>
       </div>
       <div class="space-y-4">
        <div><label for="box-weight" class="text-gray-700 text-sm font-medium mb-2 block"> Peso da Caixa (kg) </label> <input type="number" id="box-weight" step="0.1" min="0" class="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300" placeholder="Peso unitário">
        </div>
        <div><label for="stack-height" class="text-gray-700 text-sm font-medium mb-2 block"> Quantidade de Caixas </label> <input type="number" id="stack-height" step="1" min="1" class="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300" placeholder="Qtd empilhadas">
         <p class="text-gray-500 text-xs mt-1">Número de caixas empilhadas</p>
        </div><!-- Altura Total do Empilhamento -->
        <div id="total-stack-height-display" class="bg-blue-50 rounded-lg p-3 border border-blue-200" style="display: none;">
         <p class="text-blue-700 text-sm font-medium mb-1">Altura Total do Empilhamento:</p>
         <p class="text-blue-800 font-bold text-lg"><span id="total-stack-height">0</span> cm</p>
        </div>
       </div>
      </div><!-- Análise de Segurança do Empilhamento -->
      <div id="safety-analysis" style="display: none;">
       <div class="border-t border-gray-200 pt-6">
        <div class="flex items-center mb-4">
         <div class="w-10 h-10 bg-gray-500/20 rounded-full flex items-center justify-center mr-3">
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
         </div>
         <h3 class="text-xl font-semibold text-gray-800">Segurança</h3>
        </div>
        <div class="space-y-3">
         <div class="bg-white rounded-lg p-3 border border-gray-200">
          <p class="text-gray-600 text-sm mb-1">Peso Total no Fundo:</p>
          <p class="text-gray-800 font-bold"><span id="total-weight">0</span> kg</p>
         </div>
         <div class="bg-white rounded-lg p-3 border border-gray-200">
          <p class="text-gray-600 text-sm mb-1">Margem de Segurança:</p>
          <p class="text-gray-800 font-bold"><span id="safety-margin">0</span>%</p>
         </div><!-- Status de Segurança -->
         <div id="safety-status" class="rounded-lg p-4 border-2 text-center">
          <div class="flex items-center justify-center mb-2"><span id="safety-icon" class="text-2xl mr-2">⚠️</span> <span id="safety-text" class="font-bold text-lg">CALCULANDO...</span>
          </div>
          <p id="safety-description" class="text-sm">Analisando condições de empilhamento...</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div><!-- Info Card -->
   <div class="glass-effect rounded-xl p-6 mt-8">
    <h3 class="text-xl font-semibold text-gray-800 mb-4">ℹ️ Sobre a Calculadora BCT</h3>
    <div class="text-gray-700 space-y-4">
     <p>A <strong>Calculadora BCT (Box Compression Test)</strong> é uma ferramenta essencial para profissionais de embalagem que precisam determinar a resistência à compressão de caixas de papelão ondulado.</p>
     <p>Esta calculadora utiliza a fórmula padrão da indústria para calcular o BCT (Teste de Compressão de Caixa), levando em consideração características do material, dimensões da embalagem e fatores ambientais que afetam sua resistência.</p>
     <p><strong>Para que serve:</strong> O resultado do BCT ajuda você a garantir que suas embalagens suportarão o peso durante o armazenamento, transporte e empilhamento, mantendo a integridade do produto e evitando danos. É fundamental para o design seguro e eficiente de embalagens.</p>
    </div>
   </div>
  </main><!-- Footer -->
  <footer class="mt-12 py-6">
   <footer class="mt-12 py-6">
  <div class="container mx-auto px-4 text-center">
    <p class="text-white text-sm opacity-60">
      • Criado por Camila Pinheiro Godoi - Desenvolvimento de embalagens - UP Pack Comércio e Serviço de Embalagens Ltda.
    </p>
  </div>

  <div class="container mx-auto px-4 text-center">
    <p class="text-white text-sm opacity-60">
      • Disponibilizado por William David Garcia Martinez – Marketing na UP Pack Comércio e Serviço de Embalagens Ltda.
    </p>
  </div>
</footer>

  </footer>
  <script>
        // Default configuration
        const defaultConfig = {
            calculator_title: "Calculadora BCT - Compressão de Papelão",
            formula_label: "Calcule a resistência à compressão com a fórmula BCT simplificada",
            result_label: "Resistência BCT Final:"
        };

        // Get DOM elements
        const waveTypeRadios = document.querySelectorAll('input[name="wave-type"]');
        const materialColumnInput = document.getElementById('material-column');
        const thicknessInput = document.getElementById('thickness');
        const lengthInput = document.getElementById('length');
        const widthInput = document.getElementById('width');
        const heightInput = document.getElementById('height');
        const boxWeightInput = document.getElementById('box-weight');
        const stackHeightInput = document.getElementById('stack-height');
        const totalStackHeightDisplay = document.getElementById('total-stack-height-display');
        const totalStackHeightElement = document.getElementById('total-stack-height');
        const resultContainer = document.getElementById('result-container');
        const resultValue = document.getElementById('result-value');
        const bctBaseElement = document.getElementById('bct-base');
        const totalFactorElement = document.getElementById('total-factor');
        const errorMessage = document.getElementById('error-message');
        const safetyAnalysis = document.getElementById('safety-analysis');
        const totalWeightElement = document.getElementById('total-weight');
        const safetyMarginElement = document.getElementById('safety-margin');
        const safetyStatus = document.getElementById('safety-status');
        const safetyIcon = document.getElementById('safety-icon');
        const safetyText = document.getElementById('safety-text');
        const safetyDescription = document.getElementById('safety-description');

        // Helper function to check if a radio group has a selection
        function isRadioGroupSelected(name) {
            const selected = document.querySelector(`input[name="${name}"]:checked`);
            return selected !== null && selected.value !== "";
        }

        // Helper function to get selected radio value
        function getSelectedRadioValue(name) {
            const selected = document.querySelector(`input[name="${name}"]:checked`);
            if (!selected) return null;
            return parseFloat(selected.value);
        }

        // Function to calculate and display total stack height
        function updateTotalStackHeight() {
            const boxHeight = parseFloat(heightInput.value);
            const stackQuantity = parseFloat(stackHeightInput.value);
            
            if (boxHeight && stackQuantity && boxHeight > 0 && stackQuantity > 0) {
                const totalHeight = boxHeight * stackQuantity;
                totalStackHeightElement.textContent = totalHeight.toFixed(1);
                totalStackHeightDisplay.style.display = 'block';
            } else {
                totalStackHeightDisplay.style.display = 'none';
            }
        }

        // Function to analyze stacking safety
        function analyzeSafety(bctFinal, boxWeight, stackHeight) {
            if (!boxWeight || !stackHeight || boxWeight <= 0 || stackHeight <= 0) {
                safetyAnalysis.style.display = 'none';
                return;
            }

            // Calculate total weight on bottom box (weight of all boxes above)
            const totalWeight = boxWeight * (stackHeight - 1);
            
            // Convert BCT from kgf to kg (1 kgf ≈ 1 kg for practical purposes)
            const bctInKg = bctFinal;
            
            // Calculate safety margin percentage
            const safetyMargin = ((bctInKg - totalWeight) / bctInKg) * 100;
            
            // Update display values
            totalWeightElement.textContent = totalWeight.toFixed(1);
            safetyMarginElement.textContent = safetyMargin.toFixed(1);
            
            // Determine safety status
            let statusClass, icon, text, description;
            
            if (safetyMargin >= 50) {
                // SEGURO - Verde
                statusClass = 'bg-green-50 border-green-300 text-green-800';
                icon = '✅';
                text = 'SEGURO';
                description = 'Empilhamento seguro com boa margem de segurança. A caixa do fundo suporta bem o peso.';
            } else if (safetyMargin >= 20) {
                // ARRISCADO - Amarelo
                statusClass = 'bg-yellow-50 border-yellow-300 text-yellow-800';
                icon = '⚠️';
                text = 'ARRISCADO';
                description = 'Empilhamento com margem de segurança baixa. Monitore as condições e considere reduzir a altura.';
            } else {
                // PERIGOSO - Vermelho
                statusClass = 'bg-red-50 border-red-300 text-red-800';
                icon = '🚨';
                text = 'PERIGOSO';
                description = 'Empilhamento perigoso! A caixa do fundo pode não suportar o peso. Reduza a altura imediatamente.';
            }
            
            // Apply styling and content
            safetyStatus.className = `rounded-lg p-4 border-2 text-center ${statusClass}`;
            safetyIcon.textContent = icon;
            safetyText.textContent = text;
            safetyDescription.textContent = description;
            
            // Show safety analysis
            safetyAnalysis.style.display = 'block';
        }

        // Calculate BCT function
        function calculateBCT() {
            // Hide previous results and errors
            resultContainer.style.display = 'none';
            errorMessage.style.display = 'none';
            document.getElementById('placeholder-result').style.display = 'none';

            // Get input values
            const waveType = getSelectedRadioValue('wave-type');
            const materialColumn = parseFloat(materialColumnInput.value);
            const thickness = parseFloat(thicknessInput.value);
            const length = parseFloat(lengthInput.value);
            const width = parseFloat(widthInput.value);
            
            // Check if all security factors are selected
            const waveTypeSelected = isRadioGroupSelected('wave-type');
            const humiditySelected = isRadioGroupSelected('humidity');
            const storageSelected = isRadioGroupSelected('storage');
            const handlingSelected = isRadioGroupSelected('handling');
            const productSelected = isRadioGroupSelected('product');
            const stackingSelected = isRadioGroupSelected('stacking');

            // Get safety factors if selected
            const humidityFactor = getSelectedRadioValue('humidity');
            const storageFactor = getSelectedRadioValue('storage');
            const handlingFactor = getSelectedRadioValue('handling');
            const productFactor = getSelectedRadioValue('product');
            const stackingFactor = getSelectedRadioValue('stacking');

            // Validate inputs
            if (isNaN(materialColumn) || isNaN(thickness) || isNaN(length) || isNaN(width) ||
                materialColumn <= 0 || thickness <= 0 || length <= 0 || width <= 0) {
                errorMessage.style.display = 'block';
                document.getElementById('placeholder-result').style.display = 'block';
                return;
            }

            // Check if all security factors are selected
            if (!waveTypeSelected || !humiditySelected || !storageSelected || !handlingSelected || !productSelected || !stackingSelected) {
                errorMessage.style.display = 'block';
                document.getElementById('placeholder-result').style.display = 'block';
                return;
            }

            // Calculate BCT base using the formula
            // BCT = K⋅CM^0,5⋅E^0,5⋅(C⋅L)^0,5⋅Fatores
            const cmPower = Math.pow(materialColumn, 0.5);
            const thicknessPower = Math.pow(thickness, 0.5);
            const areaTerm = Math.pow(length * width, 0.5);
            const bctBase = waveType * cmPower * thicknessPower * areaTerm;

            // Calculate total safety factor
            const totalFactor = humidityFactor * storageFactor * handlingFactor * productFactor * stackingFactor;

            // Calculate final BCT with safety factors
            const bctFinal = bctBase * totalFactor;

            // Display results
            resultValue.textContent = bctFinal.toFixed(2);
            bctBaseElement.textContent = bctBase.toFixed(2);
            totalFactorElement.textContent = totalFactor.toFixed(4);
            resultContainer.style.display = 'block';
            resultContainer.classList.add('result-animation');

            // Analyze stacking safety if weight and height are provided
            const boxWeight = parseFloat(boxWeightInput.value);
            const stackHeight = parseFloat(stackHeightInput.value);
            analyzeSafety(bctFinal, boxWeight, stackHeight);
        }

        // Allow Enter key to calculate
        [materialColumnInput, thicknessInput, lengthInput, widthInput, heightInput].forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    calculateBCT();
                }
            });
        });

        // Auto-calculate when all fields are filled
        function autoCalculate() {
            const allFilled = waveTypeRadios.length > 0 && isRadioGroupSelected('wave-type') &&
                            materialColumnInput.value && thicknessInput.value && 
                            lengthInput.value && widthInput.value;
            if (allFilled) {
                setTimeout(calculateBCT, 300);
            }
            // Update total stack height whenever height or quantity changes
            updateTotalStackHeight();
        }

        // Add event listeners to inputs
        [materialColumnInput, thicknessInput, lengthInput, widthInput, heightInput, boxWeightInput, stackHeightInput].forEach(input => {
            input.addEventListener('input', autoCalculate);
            input.addEventListener('change', autoCalculate);
        });

        // Add event listeners to radio buttons
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', autoCalculate);
        });

        // Element SDK configuration
        async function onConfigChange(config) {
            const titleElement = document.getElementById('calculator-title');
            const formulaElement = document.getElementById('formula-label');
            const resultLabelElement = document.getElementById('result-label');

            if (titleElement) {
                titleElement.textContent = config.calculator_title || defaultConfig.calculator_title;
            }
            if (formulaElement) {
                formulaElement.textContent = config.formula_label || defaultConfig.formula_label;
            }
            if (resultLabelElement) {
                resultLabelElement.textContent = config.result_label || defaultConfig.result_label;
            }
        }

        function mapToCapabilities(config) {
            return {
                recolorables: [],
                borderables: [],
                fontEditable: undefined,
                fontSizeable: undefined
            };
        }

        function mapToEditPanelValues(config) {
            return new Map([
                ["calculator_title", config.calculator_title || defaultConfig.calculator_title],
                ["formula_label", config.formula_label || defaultConfig.formula_label],
                ["result_label", config.result_label || defaultConfig.result_label]
            ]);
        }

        // Initialize Element SDK
        if (window.elementSdk) {
            window.elementSdk.init({
                defaultConfig,
                onConfigChange,
                mapToCapabilities,
                mapToEditPanelValues
            });
        }
    </script>
 <script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9cd5a430529dca97',t:'MTc3MDk5OTUwMy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script><iframe height="1" width="1" style="position: absolute; top: 0px; left: 0px; border: none; visibility: hidden;"></iframe>
</body></html>
