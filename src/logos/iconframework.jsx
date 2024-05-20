import React, { useContext } from "react"
import { Tooltip, Button } from "@nextui-org/react";
import { ThemeContext } from "../contexts/themecontexts";


function Iconoframework() {
    const { theme } = useContext(ThemeContext);
    let fill = ""
    const md = "30px"
    const lg = "40px"
    const xl = "50px"

    if (theme === "dark") {
        fill = "white"
    }
    return (
        <div className="flex iconwhite gap-4 mt-2">
            <Tooltip showArrow={true} color={"primary"} content="React">
                <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 539.51 480.1" fill={fill} width={md}>
                    <g id="Layer_1" data-name="Layer 1">
                        <g>
                            <path class="cls-1" d="M318.16,240.05c0,26.73-21.67,48.41-48.4,48.41s-48.4-21.68-48.4-48.41,21.67-48.4,48.4-48.4,48.4,21.67,48.4,48.4Z" />
                            <path class="cls-1" d="M269.75,130.05C120.77,130.05,0,179.3,0,240.05s120.77,110,269.75,110,269.75-49.25,269.75-110-120.78-110-269.75-110ZM452.02,297.05c-48.32,19.7-113.05,30.55-182.27,30.55s-133.95-10.85-182.27-30.55c-40.73-16.61-65.03-37.91-65.03-57s24.31-40.39,65.03-56.99c48.32-19.7,113.05-30.55,182.27-30.55s133.95,10.85,182.27,30.55c40.72,16.61,65.03,37.91,65.03,56.99s-24.31,40.39-65.03,57Z" />
                            <path class="cls-1" d="M174.49,185.05c-74.49,129.02-92.23,258.23-39.62,288.61,52.61,30.38,155.64-49.59,230.14-178.61C439.5,166.02,457.23,36.81,404.63,6.44c-52.61-30.38-155.65,49.59-230.14,178.61ZM410.24,110.7c-7.1,51.7-30.06,113.18-64.67,173.12-34.61,59.95-76.38,110.58-117.6,142.58-34.74,26.96-65.35,37.36-81.87,27.82-16.53-9.54-22.82-41.25-16.85-84.82,7.1-51.7,30.07-113.18,64.68-173.13,34.61-59.94,76.37-110.57,117.59-142.57,34.75-26.97,65.35-37.37,81.88-27.83,16.53,9.54,22.82,41.25,16.84,84.82Z" />
                            <path class="cls-1" d="M134.88,6.44c-52.61,30.37-34.88,159.58,39.62,288.61,74.49,129.02,177.53,208.99,230.14,178.61,52.6-30.38,34.87-159.59-39.62-288.61C290.52,56.03,187.48-23.93,134.88,6.44ZM146.1,25.88c16.53-9.54,47.13.86,81.88,27.83,41.22,32,82.99,82.62,117.59,142.57,34.61,59.95,57.58,121.43,64.68,173.13,5.98,43.57-.31,75.28-16.84,84.82-16.53,9.54-47.13-.86-81.88-27.82-41.22-32-82.98-82.63-117.59-142.58-34.61-59.94-57.57-121.42-64.68-173.12-5.97-43.57.31-75.28,16.84-84.82Z" />
                        </g>
                    </g>
                </svg>
            </Tooltip>
            <Tooltip showArrow={true} color={"primary"} content="Angular">
                <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.78 509.7" fill={fill} width={md}>
                    <g id="Layer_1" data-name="Layer 1">
                        <g>
                            <polygon class="cls-1" points="237.77 164.32 194.61 267.64 237.89 267.64 281.17 267.64 238.01 164.32 237.89 164.55 237.77 164.32" />
                            <path class="cls-1" d="M237.89,0L0,85.02l35.7,314.04,202.19,110.64,202.2-110.64,35.7-314.04L237.89,0ZM331.69,389.11l-29.89-74.86h-127.82l-29.89,74.86h-56.82L237.89,55.05l150.62,334.06h-56.81Z" />
                        </g>
                    </g>
                </svg>
            </Tooltip>
            <Tooltip showArrow={true} color={"primary"} content="Git/Github">
                <svg className="self-center" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" fill={fill} width={md}>
                    <path d="M 46.792969 22.089844 L 27.910156 3.207031 C 27.109375 2.402344 26.054688 2 25 2 C 23.945313 2 22.890625 2.402344 22.089844 3.207031 L 18.355469 6.941406 L 22.976563 11.5625 C 24.511719 10.660156 26.511719 10.855469 27.828125 12.171875 C 29.144531 13.488281 29.335938 15.488281 28.433594 17.019531 L 32.976563 21.5625 C 34.511719 20.660156 36.511719 20.855469 37.828125 22.171875 C 39.390625 23.734375 39.390625 26.265625 37.828125 27.828125 C 36.265625 29.390625 33.734375 29.390625 32.171875 27.828125 C 30.855469 26.511719 30.660156 24.511719 31.5625 22.976563 L 27.019531 18.433594 C 26.695313 18.625 26.355469 18.765625 26 18.855469 L 26 31.140625 C 27.722656 31.585938 29 33.136719 29 35 C 29 37.210938 27.210938 39 25 39 C 22.789063 39 21 37.210938 21 35 C 21 33.136719 22.277344 31.585938 24 31.140625 L 24 18.855469 C 23.332031 18.683594 22.695313 18.351563 22.171875 17.828125 C 20.855469 16.511719 20.664063 14.511719 21.566406 12.980469 L 16.941406 8.355469 L 3.207031 22.089844 C 1.597656 23.695313 1.597656 26.304688 3.207031 27.910156 L 22.089844 46.792969 C 22.890625 47.597656 23.945313 48 25 48 C 26.054688 48 27.109375 47.597656 27.910156 46.792969 L 46.792969 27.910156 C 48.402344 26.304688 48.402344 23.695313 46.792969 22.089844 Z"></path>
                </svg>
            </Tooltip>
            <Tooltip showArrow={true} color={"primary"} content="NodeJS">
                <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 664.95 407.28" fill={fill} width={lg}>
                    <g id="Layer_1" data-name="Layer 1">
                        <g>
                            <path class="cls-1" d="M327.91,407.28c-2.19,0-4.36-.57-6.27-1.68l-19.97-11.82c-2.98-1.67-1.52-2.26-.54-2.6,3.98-1.38,4.79-1.7,9.03-4.11.44-.25,1.03-.15,1.49.11l15.34,9.11c.56.31,1.34.31,1.85,0l59.82-34.53c.56-.32.91-.96.91-1.62v-69.04c0-.68-.36-1.31-.93-1.65l-59.8-34.5c-.55-.32-1.29-.32-1.84,0l-59.79,34.51c-.58.33-.95.98-.95,1.64v69.04c0,.66.37,1.29.94,1.6l16.39,9.47c8.89,4.44,14.34-.79,14.34-6.05v-68.16c0-.97.77-1.73,1.74-1.73h7.59c.95,0,1.73.76,1.73,1.73v68.16c0,11.87-6.46,18.67-17.71,18.67-3.46,0-6.18,0-13.78-3.74l-15.69-9.03c-3.87-2.24-6.27-6.43-6.27-10.91v-69.04c0-4.48,2.4-8.67,6.27-10.9l59.82-34.57c3.78-2.14,8.82-2.14,12.57,0l59.82,34.57c3.87,2.24,6.28,6.42,6.28,10.9v69.04c0,4.49-2.41,8.66-6.28,10.91l-59.82,34.54c-1.91,1.11-4.08,1.68-6.3,1.68" />
                            <path class="cls-1" d="M346.39,359.72c-26.18,0-31.66-12.01-31.66-22.09,0-.96.77-1.72,1.73-1.72h7.74c.86,0,1.58.62,1.72,1.47,1.17,7.87,4.65,11.85,20.48,11.85,12.6,0,17.97-2.85,17.97-9.54,0-3.85-1.52-6.72-21.11-8.63-16.37-1.62-26.49-5.23-26.49-18.33,0-12.07,10.17-19.27,27.23-19.27,19.17,0,28.65,6.65,29.85,20.93.04.49-.13.96-.45,1.33-.33.34-.79.55-1.27.55h-7.76c-.81,0-1.52-.57-1.68-1.35-1.86-8.28-6.39-10.93-18.68-10.93-13.76,0-15.36,4.79-15.36,8.38,0,4.35,1.89,5.62,20.46,8.08,18.39,2.43,27.12,5.87,27.12,18.79s-10.87,20.5-29.83,20.5" />
                            <path class="cls-1" d="M486.31,22.49L448.31.63c-2.55-1.47-4.64-.26-4.64,2.68v103.86l-19.53-11.28c-2.57-1.48-6.76-1.48-9.32,0l-62.15,35.88c-2.56,1.48-4.66,5.11-4.66,8.07v71.76c0,2.96,2.1,6.59,4.66,8.07l62.15,35.88c2.56,1.48,6.76,1.48,9.32,0l62.15-35.88c2.56-1.48,4.66-5.11,4.66-8.07V30.52c0-2.94-2.09-6.55-4.64-8.02ZM443.37,187.72c0,.99-.7,2.2-1.56,2.7l-20.77,11.99c-.86.49-2.26.49-3.12,0l-20.77-11.99c-.86-.5-1.56-1.71-1.56-2.7v-23.99c0-.99.7-2.2,1.56-2.7l20.77-11.99c.86-.5,2.26-.5,3.12,0l20.77,11.99c.86.5,1.56,1.71,1.56,2.7v23.99Z" />
                            <path class="cls-1" d="M138.27,131.28l-62.15-35.88c-2.57-1.48-6.76-1.48-9.32,0L4.66,131.28c-2.56,1.48-4.66,5.11-4.66,8.07v97.41c0,2.95,2.09,4.15,4.64,2.68l38.31-22.09c2.55-1.47,4.64-5.08,4.64-8.03v-46.09c0-.99.7-2.2,1.56-2.7l20.77-12c.86-.49,2.26-.49,3.12,0l20.77,12c.86.49,1.56,1.71,1.56,2.7v46.09c0,2.94,2.08,6.55,4.63,8.03l38.31,22.09c2.55,1.47,4.64.26,4.64-2.68v-97.41c0-2.96-2.1-6.59-4.66-8.07Z" />
                            <g>
                                <path class="cls-1" d="M664.87,138.82c-.03-.18-.07-.36-.11-.54h0s-.02-.08-.03-.12c-.09-.4-.21-.8-.36-1.2-.01-.03-.02-.06-.03-.09h0c-.11-.3-.23-.58-.37-.87h0c-.19-.4-.41-.79-.65-1.17-.05-.08-.11-.17-.16-.25-.16-.23-.31-.45-.48-.66-.14-.17-.27-.34-.42-.51-.09-.1-.18-.2-.27-.29-.22-.23-.45-.45-.69-.65-.05-.05-.11-.09-.17-.13-.27-.22-.55-.41-.83-.58l-14.24-8.22-47.91-27.66c-2.56-1.48-6.76-1.48-9.32,0l-62.15,35.88c-2.56,1.48-4.66,5.11-4.66,8.07v71.76c0,2.96,2.1,6.59,4.66,8.07l19.04,11,43.06,24.89c2.55,1.47,6.72,1.47,9.27,0l38.28-22.13c2.55-1.47,2.55-3.88,0-5.35l-65.17-37.66c-.86-.5-1.56-1.71-1.56-2.7v-23.99c0-.99.7-2.2,1.56-2.7l20.77-11.99c.86-.5,2.26-.5,3.12,0l20.77,11.99c.86.5,1.56,1.71,1.56,2.7v18.47c0,2.95,2.09,4.15,4.64,2.68l19.93-11.49h0l18.38-10.59c2.55-1.47,4.64-5.08,4.64-8.02v-14.93c0-.33-.03-.68-.08-1.02Z" />
                                <path class="cls-1" d="M594.37,158.99c-.48-.28-1.28-.28-1.76,0l-11.76,6.79c-.49.28-.88.97-.88,1.53v13.58c0,.56.4,1.25.88,1.53l11.76,6.79c.48.28,1.28.28,1.76,0l11.76-6.79c.48-.28.88-.97.88-1.53v-13.58c0-.56-.4-1.25-.88-1.53l-11.76-6.79Z" />
                            </g>
                            <g>
                                <path class="cls-1" d="M240.81,96.02l-62.15,35.88c-2.56,1.48-4.66,5.11-4.66,8.07v71.76c0,2.96,2.1,6.59,4.66,8.07l62.15,35.88c2.56,1.48,6.76,1.48,9.32,0l62.15-35.88c2.56-1.48,4.66-5.11,4.66-8.07v-71.76c0-2.96-2.1-6.59-4.66-8.07l-62.15-35.88c-2.56-1.48-6.76-1.48-9.32,0Z" />
                                <path class="cls-1" d="M174.94,211.47c-1.47,2.55-.59,5.84,1.96,7.31l65.67,37.91c2.55,1.47,5.84.59,7.31-1.96l66.11-114.51c1.47-2.55.59-5.84-1.96-7.31l-65.67-37.91c-2.55-1.47-5.84-.59-7.31,1.96l-66.12,114.51Z" />
                                <path class="cls-1" d="M316,211.47c1.47,2.55.59,5.84-1.96,7.31l-65.67,37.91c-2.55,1.47-5.84.59-7.31-1.96l-66.12-114.51c-1.47-2.55-.59-5.84,1.96-7.31l65.67-37.91c2.55-1.47,5.84-.59,7.31,1.96l66.11,114.51Z" />
                            </g>
                        </g>
                    </g>
                </svg>
            </Tooltip>
            <Tooltip showArrow={true} color={"primary"} content="Boostrap">
                <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 407.37" fill={fill} width={md}>
                    <g id="Layer_1" data-name="Layer 1">
                        <path class="cls-1" d="M270.35,124.29c-18.79-1.8-37.85-.88-56.79-1.14-.26,0-.52.32-.89.56v63.68c1.25.12,2.2.3,3.16.29,14.46-.15,28.95.1,43.39-.67,6.5-.35,13.13-2.13,19.29-4.38,8.66-3.17,14.78-9.4,17.49-18.49,5.94-19.89-4.72-37.84-25.65-39.85ZM289.13,219.02c-6.66-2.72-14.02-4.71-21.16-5.06-17.1-.83-34.26-.44-51.4-.69-3.26-.05-4.3,1.01-4.28,4.27.12,21.09.06,42.17.08,63.26,0,1.12.25,2.24.36,3.14,19.37,0,38.48.44,57.55-.24,6.6-.23,13.46-2.42,19.57-5.14,12.86-5.72,17.83-16.8,17.74-30.29-.08-13.45-5.69-24.04-18.46-29.25ZM289.13,219.02c-6.66-2.72-14.02-4.71-21.16-5.06-17.1-.83-34.26-.44-51.4-.69-3.26-.05-4.3,1.01-4.28,4.27.12,21.09.06,42.17.08,63.26,0,1.12.25,2.24.36,3.14,19.37,0,38.48.44,57.55-.24,6.6-.23,13.46-2.42,19.57-5.14,12.86-5.72,17.83-16.8,17.74-30.29-.08-13.45-5.69-24.04-18.46-29.25ZM259.22,187.01c6.5-.35,13.13-2.13,19.29-4.38,8.66-3.17,14.78-9.4,17.49-18.49,5.94-19.89-4.72-37.84-25.65-39.85-18.79-1.8-37.85-.88-56.79-1.14-.26,0-.52.32-.89.56v63.68c1.25.12,2.2.3,3.16.29,14.46-.15,28.95.1,43.39-.67ZM475.89,167.8c-9.61-15-14.01-31.83-16.82-49.13-3.46-21.23-4.39-42.63-3.53-64.11C456.74,24.88,433.81-.15,402.23.04,304.92.63,207.6.69,110.29,0c-31.97-.22-55.31,25.13-53.86,56.07,1.33,28.65-.52,57.16-8.5,84.94-3.41,11.89-8.22,23.17-16.23,32.83-8.25,9.96-18.8,15.65-31.7,16.97v25.94c15.5,1.55,27.14,9.37,35.56,22.13,10.01,15.16,14.51,32.3,17.39,49.93,3.46,21.22,4.37,42.6,3.56,64.07-.43,11.26,2.48,22.53,8.71,31.96,5.44,8.22,13.36,15.11,22.54,18.83,7.8,3.16,15.57,3.72,23.91,3.7,65.69-.15,131.39-.06,197.08-.05,30.51,0,61.03,0,91.54,0,4.5,0,9.02,0,13.47-.69,26.43-4.1,42.58-29.86,41.77-55.22-.87-27.32.54-54.47,7.5-81.07,3.13-11.94,7.52-23.38,14.85-33.49,8.44-11.66,19.64-18.66,34.13-20.1v-25.94c-15.92-1.61-27.65-9.81-36.11-23.01ZM319.91,297.76c-12.77,9.05-27.34,13.32-42.68,13.63-31.64.65-63.3.38-94.95.63-4.2.04-4.38-2.15-4.37-5.34.06-41.89.04-83.77.04-125.66,0-26.76.03-53.52-.05-80.28,0-3.2.16-5.36,4.38-5.33,30.15.23,60.31.07,90.46.46,14.08.19,27.39,3.97,38.81,12.53,16.82,12.6,23.31,29.79,19.28,50.08-3.89,19.56-16.19,32.25-35.76,37.51-.66.17-1.29.48-1.39.55,8.38,3.38,17.65,5.69,25.37,10.48,31.82,19.71,32.05,68.66.86,90.74ZM289.13,219.02c-6.66-2.72-14.02-4.71-21.16-5.06-17.1-.83-34.26-.44-51.4-.69-3.26-.05-4.3,1.01-4.28,4.27.12,21.09.06,42.17.08,63.26,0,1.12.25,2.24.36,3.14,19.37,0,38.48.44,57.55-.24,6.6-.23,13.46-2.42,19.57-5.14,12.86-5.72,17.83-16.8,17.74-30.29-.08-13.45-5.69-24.04-18.46-29.25ZM259.22,187.01c6.5-.35,13.13-2.13,19.29-4.38,8.66-3.17,14.78-9.4,17.49-18.49,5.94-19.89-4.72-37.84-25.65-39.85-18.79-1.8-37.85-.88-56.79-1.14-.26,0-.52.32-.89.56v63.68c1.25.12,2.2.3,3.16.29,14.46-.15,28.95.1,43.39-.67Z" />
                    </g>
                </svg>
            </Tooltip>
            <Tooltip showArrow={true} color={"primary"} content="Tailwind">
                <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54 32.4" fill={fill} width={md}>
                    <g id="Capa_1-2" data-name="Capa 1">
                        <g class="cls-3">
                            <path class="cls-1" d="M27,0c-7.2,0-11.7,3.6-13.5,10.8,2.7-3.6,5.85-4.95,9.45-4.05,2.05.51,3.52,2,5.15,3.65,2.65,2.69,5.71,5.8,12.4,5.8,7.2,0,11.7-3.6,13.5-10.8-2.7,3.6-5.85,4.95-9.45,4.05-2.05-.51-3.52-2-5.15-3.65-2.65-2.69-5.71-5.8-12.4-5.8ZM13.5,16.2c-7.2,0-11.7,3.6-13.5,10.8,2.7-3.6,5.85-4.95,9.45-4.05,2.05.51,3.52,2,5.15,3.65,2.65,2.69,5.71,5.8,12.4,5.8,7.2,0,11.7-3.6,13.5-10.8-2.7,3.6-5.85,4.95-9.45,4.05-2.05-.51-3.52-2-5.15-3.65-2.65-2.69-5.71-5.8-12.4-5.8Z" />
                        </g>
                    </g>
                </svg>
            </Tooltip>
        </div>
    )
}

export default Iconoframework