import React from "react";

// SVG Icon components for all technologies
// Each icon is a pure SVG component for maximum performance

export function NextjsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none">
      <mask id="mask0_408_134" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="black"/>
      </mask>
      <g mask="url(#mask0_408_134)">
        <circle cx="90" cy="90" r="87" fill="black" stroke="white" strokeWidth="6"/>
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)"/>
        <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)"/>
      </g>
      <defs>
        <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ReactIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#61DAFB">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.592.068-.852.2-1.004.508-1.458 1.988-1.287 4.048.046.555.138 1.14.262 1.746C3.08 8.097 1.752 9.382 1.752 10.916c0 1.523 1.307 2.8 3.44 3.58-.122.6-.212 1.18-.257 1.727-.173 2.075.276 3.57 1.28 4.082.26.132.542.2.854.2 1.344 0 3.106-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.312 0 .594-.068.854-.2 1.004-.51 1.458-1.99 1.287-4.05-.046-.555-.138-1.14-.262-1.746 2.148-.78 3.46-2.065 3.46-3.6 0-1.522-1.308-2.8-3.44-3.58.122-.6.212-1.18.257-1.727.174-2.075-.276-3.57-1.28-4.082a1.734 1.734 0 0 0-.854-.2zM16.878 2.7c.14 0 .253.032.337.076.622.314.946 1.433.81 3.092-.038.45-.118.97-.228 1.51-1.175-.283-2.45-.476-3.784-.573A22.168 22.168 0 0 0 11.6 4.08c1.62-1.477 3.14-2.303 4.288-2.303zm-9.756.103c1.14 0 2.655.818 4.27 2.283a22.165 22.165 0 0 0-2.39 2.722c-1.332.097-2.607.29-3.782.573-.112-.547-.192-1.067-.23-1.518-.133-1.66.19-2.778.81-3.09.085-.044.198-.077.338-.077zm-.878 5.77c.396-.924.846-1.83 1.35-2.706a20.06 20.06 0 0 1 1.553-2.445c1.11.086 2.262.248 3.43.479a23.53 23.53 0 0 1 1.97 3.404 23.524 23.524 0 0 1-1.97 3.404 23.53 23.53 0 0 1-3.43.479c-.543-.153-1.06-.332-1.553-.537A20.063 20.063 0 0 1 6.244 8.57z"/>
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none">
      <rect width="400" height="400" rx="20" fill="#3178C6"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M261.38 204.41V231.42H288.89V348.55H321.34V231.42H348.85V204.69C348.85 203.4 348.81 202.12 348.73 201.34H261.38V204.41ZM230.03 260.13C222.89 252.71 213.06 247.81 199.99 244.8C192.93 243.26 186.74 241.33 181.59 239.27C176.8 237.35 173.1 234.69 170.42 231.97C168.09 229.59 166.89 226.46 166.89 222.1C166.89 217.06 168.93 213.14 172.92 210.09C176.96 207.01 183.09 205.29 191.36 205.29C202.05 205.29 210.24 208.42 215.73 213.97C221.13 219.44 224.29 227.17 225.49 236.18L225.76 238.22H257.02L256.87 236.01C256.1 224.44 252.97 214.5 247.42 206.24C241.91 198.05 234.41 191.83 225.03 187.74C215.73 183.69 204.96 181.64 192.81 181.64C180.61 181.64 169.81 183.71 160.72 187.98C151.48 192.32 144.29 198.39 139.36 205.92C134.47 213.38 132 221.89 132 231.16C132 243.42 135.86 253.55 143.44 261.02C150.55 268.02 160.13 273.04 171.93 275.89C179.21 277.64 185.56 279.74 190.78 282.05C196.26 284.48 200.31 287.67 202.76 291.35C205.06 294.81 206.24 299.24 206.24 304.47C206.24 311.6 203.77 317.21 198.61 321.67C193.34 326.22 185.63 328.59 175.47 328.59C163.2 328.59 153.46 325.06 146.56 318.24C139.76 311.52 135.53 302.04 134.02 290.05L133.73 288.03H102.52L102.71 290.27C103.57 300.73 106.71 310.4 112.02 319.1C117.37 327.87 124.86 334.87 134.32 339.88C143.86 344.92 155.3 347.49 168.42 347.49C181.21 347.49 192.5 345.37 201.98 341.06C211.59 336.7 219.09 330.5 224.25 322.65C229.37 314.86 231.97 305.93 231.97 296.01C231.97 282.96 228.08 272.35 230.03 260.13Z" fill="white"/>
    </svg>
  );
}

export function TailwindIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#06B6D4">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  );
}

export function FramerMotionIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 14 21" fill="currentColor">
      <path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z"/>
    </svg>
  );
}

export function NodejsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#339933">
      <path d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.655-.228.787-.28 1.484-.679.073-.04.17-.025.245.015l2.255 1.339a.307.307 0 0 0 .285 0l8.795-5.076a.291.291 0 0 0 .141-.251V6.829a.298.298 0 0 0-.143-.256L12.142 1.5a.288.288 0 0 0-.284 0L3.074 6.573a.294.294 0 0 0-.144.254v10.152c0 .103.055.2.144.249l2.41 1.392c1.307.654 2.107-.116 2.107-.89V7.713c0-.148.12-.266.27-.266h1.176c.147 0 .268.118.268.266v10.017c0 1.744-.95 2.745-2.604 2.745-.508 0-.909 0-2.027-.55l-2.307-1.327A1.852 1.852 0 0 1 1.44 17.074V6.922c0-.644.342-1.246.9-1.569L11.132.276a1.929 1.929 0 0 1 1.81 0l8.794 5.077c.557.323.9.925.9 1.57v10.15c0 .645-.343 1.245-.9 1.569l-8.794 5.077c-.28.163-.605.247-.922.247"/>
    </svg>
  );
}

export function PrismaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.807 18.285L13.553.756a1.324 1.324 0 0 0-1.129-.754 1.31 1.31 0 0 0-1.206.626l-8.952 14.5a1.356 1.356 0 0 0 .016 1.455l4.376 6.778a1.408 1.408 0 0 0 1.58.581l12.703-3.757c.389-.115.707-.39.873-.755a1.35 1.35 0 0 0 .007-1.14zm-1.848.752L8.886 22.15a.398.398 0 0 1-.508-.266l-4.09-6.357c-.098-.152-.09-.35.024-.493L12.96 1.598a.387.387 0 0 1 .697.103l8.16 17.276a.393.393 0 0 1-.354.57l-.503-.01z"/>
    </svg>
  );
}

export function PostgreSQLIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#4169E1">
      <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.347.524 9.455 1.065c-.57-.253-1.832-.718-3.262-.684C4.504.418 2.682 1.2 1.618 3.23.093 6.14.135 10.297 1.74 13.075c.413.714.902 1.298 1.446 1.694.187 1.542.674 2.763 1.39 3.55.876.962 1.96 1.265 2.946 1.14.398-.05.82-.207 1.244-.437.258.47.618.85 1.074 1.11.692.396 1.498.455 2.306.175a2.823 2.823 0 0 0 .386-.167l.045-.022c.238 2.124.735 3.358 1.74 3.887.478.252 1.062.37 1.736.37.818 0 1.768-.183 2.737-.466 1.266-.369 2.004-.865 2.376-1.626.347-.71.348-1.59.331-2.765l-.003-.137c.012-.027 1.393-2.665 1.825-5.7.232.037.466.054.697.054.638 0 1.258-.147 1.783-.553.567-.437 1.043-1.264 1.043-2.76V8.32c-.01-1.465-.485-2.522-1.397-3.203A4.312 4.312 0 0 0 22.3 3.907c.05-.09.088-.177.133-.264C21.63 1.617 19.456.122 17.128 0z"/>
    </svg>
  );
}

export function StripeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#635BFF">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-7.076-2.19l-.893 5.575C4.902 22.755 7.671 24 11.233 24c2.612 0 4.732-.634 6.205-1.88 1.63-1.335 2.464-3.283 2.464-5.788 0-4.107-2.504-5.834-5.926-7.182z"/>
    </svg>
  );
}

export function VercelIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L24 22H0z"/>
    </svg>
  );
}

export function GitIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#F05032">
      <path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.66 2.66a1.838 1.838 0 1 1-1.103 1.03l-2.48-2.48v6.53a1.838 1.838 0 1 1-1.513-.07V8.773a1.838 1.838 0 0 1-.997-2.41L7.636 3.64.452 10.822a1.55 1.55 0 0 0 0 2.19l10.48 10.478a1.55 1.55 0 0 0 2.186 0l10.43-10.43a1.55 1.55 0 0 0 0-2.13z"/>
    </svg>
  );
}

export function HTML5Icon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#E34F26">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.071-.757.527-5.783H5.879l.142 1.508h8.418l-.197 2.067H6.164l.22 2.576h7.405l-.266 2.964-1.522.405-1.576-.432-.088-1.084H8.802l.216 2.437 3.017.834 2.982-.836.469-4.736H8.531z"/>
    </svg>
  );
}

export function CSS3Icon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#1572B6">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.002l5.355-1.12.72-8.19H5.63l-.21-2.716 13.17.003z"/>
    </svg>
  );
}

export function JavaScriptIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#F7DF1E">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.405-.6-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.09c-.676.165-1.32.525-1.71 1.005-1.14 1.275-.81 3.51.6 4.44 1.394.93 3.27 1.125 3.52 2.01.24 1.11-.855 1.47-1.935 1.34-.794-.18-1.24-.585-1.72-1.335-.96.555-.96.555-2.01 1.155.24.45.51.66.78.975 1.305 1.26 4.585 1.185 5.175-.75.02-.065.285-.705.075-1.65"/>
    </svg>
  );
}

export function PythonIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="url(#python-gradient)">
      <defs>
        <linearGradient id="python-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3776AB"/>
          <stop offset="100%" stopColor="#FFD43B"/>
        </linearGradient>
      </defs>
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v.4H6.35v2.82H14.25V.18zM14.02 4.19a1.114 1.114 0 1 0-1.114 1.113c.304 0 .592-.123.805-.34a1.12 1.12 0 0 0 .309-.773z"/>
    </svg>
  );
}

export function CSharpIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#68217A">
      <path d="M11.5 15.97l.348-.02c1.7-.09 3.104-.73 4.177-1.902 1.166-1.275 1.75-2.902 1.75-4.852 0-1.89-.542-3.415-1.625-4.58-1.09-1.17-2.502-1.76-4.227-1.76-1.752 0-3.188.583-4.3 1.75C6.502 5.787 5.94 7.314 5.94 9.19c0 1.896.556 3.434 1.67 4.614C8.716 14.96 10.05 15.582 11.77 15.668l-.27.302zm5.608-.93l1.3-.75.75 1.3-1.3.75.75 1.3-1.3.75-.75-1.3-1.3.75-.75-1.3 1.3-.75-.75-1.3 1.3-.75zm4 0l1.3-.75.75 1.3-1.3.75.75 1.3-1.3.75-.75-1.3-1.3.75-.75-1.3 1.3-.75-.75-1.3 1.3-.75z"/>
    </svg>
  );
}

export function DotNetIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#512BD4">
      <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.209v5.773H3.17V7.53h1.674l3.96 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.53h1.349zm-8.1-.903a.96.96 0 0 1-.702-.29.959.959 0 0 1-.29-.701c0-.28.097-.515.29-.706A.958.958 0 0 1 2.34 14c.275 0 .51.097.706.294a.959.959 0 0 1 .294.706.95.95 0 0 1-.992.993z"/>
    </svg>
  );
}

export function ZodIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#3E67B1">
      <path d="M19.088 2.477L24 7.606 12.521 20.485l-.925 1.038L0 7.559l4.862-5.082zm-14.6 5.2l7.222 8.754 7.387-8.882H13.55l-3.878 4.715L6.017 7.676z"/>
    </svg>
  );
}

export function ESLintIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#4B32C3">
      <path d="M7.257 9.132L11.816 6.5a.369.369 0 0 1 .368 0l4.559 2.632a.369.369 0 0 1 .184.32v5.263a.369.369 0 0 1-.184.319l-4.559 2.632a.369.369 0 0 1-.368 0l-4.559-2.632a.369.369 0 0 1-.184-.32V9.452a.37.37 0 0 1 .184-.32M23.852 11.53l-5.446-9.475c-.198-.344-.6-.557-1.052-.557H6.646c-.452 0-.853.213-1.05.557L.148 11.53c-.197.344-.197.773 0 1.117l5.447 9.475c.197.344.6.557 1.05.557h10.708c.452 0 .853-.213 1.052-.557l5.446-9.475c.2-.344.2-.773 0-1.117z"/>
    </svg>
  );
}

export function VitestIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M14.533 2.345L8.442 13.662a.412.412 0 0 0 .46.604l5.766-1.254a.412.412 0 0 1 .478.534l-2.886 8.78a.257.257 0 0 0 .448.222l9.345-11.608a.412.412 0 0 0-.406-.65l-5.578 1.044a.412.412 0 0 1-.47-.497l2.164-8.668a.412.412 0 0 0-.55-.465l-2.228.994a.412.412 0 0 0-.198.161z" fill="#FCC72B"/>
      <path d="M8.345.5l-6.2 10.74a.412.412 0 0 0 .358.614h5.06" fill="#729B1B"/>
    </svg>
  );
}

export function SQLServerIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#CC2927">
      <path d="M4.246 14.736c-.105.14-.07.315 0 .56.14.456.49 1.12 1.26 1.68.665.497 1.54.847 2.555 1.022V16.48c-.77-.175-1.4-.49-1.82-.84-.56-.49-.77-1.015-.735-1.33.035-.28.315-.42.77-.385.14.035.28.07.42.14l.105.035c.385.175.805.315 1.26.42v-1.645c-1.155-.28-2.135-.665-2.835-1.225-.77-.595-1.225-1.365-1.225-2.275 0-.98.455-1.785 1.26-2.345.56-.385 1.26-.63 2.03-.735V5.1h1.26v1.19c.91.14 1.68.455 2.31.91.875.665 1.435 1.575 1.575 2.695h-1.89c-.105-.595-.42-1.05-.91-1.365-.315-.21-.665-.35-1.085-.42V9.89c1.19.28 2.17.665 2.87 1.225.77.595 1.225 1.4 1.225 2.345 0 1.015-.455 1.855-1.295 2.45-.56.385-1.26.665-2.065.77v2.1h-1.26v-2.03c-1.015-.14-1.89-.49-2.59-1.05-1.015-.77-1.645-1.855-1.82-3.15h1.89c.105.77.49 1.365 1.12 1.785.385.245.84.42 1.4.525v-1.89c-.175-.035-.35-.105-.525-.14-.07-.035-.175-.07-.245-.07-.07-.035-.14-.035-.21-.07l-.14-.035c-.035 0-.07-.035-.105-.035z"/>
    </svg>
  );
}

export function NextAuthIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/>
    </svg>
  );
}

export function ResendIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.023 0L2 9.264l9.023 2.736L2 14.736 2.023 24 22 12z"/>
    </svg>
  );
}

export function LenisIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  );
}

export function BootstrapIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#7952B3">
      <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218C24 18.075 18.075 24 12.61 24H4.557C2.04 24 0 21.962 0 19.444V4.556C0 2.04 2.04 0 4.556 0H12.61C18.075 0 24 5.925 24 11.39zM13.564 9.659c0-1.665-1.208-2.804-3.285-2.804H7.657v10.071h2.842c2.283 0 3.586-1.247 3.586-3.05 0-1.306-.72-2.198-1.904-2.425v-.072c.86-.31 1.383-1.105 1.383-1.72z"/>
    </svg>
  );
}

export function GitHubIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

export function LinkedInIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function VSCodeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#007ACC">
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
    </svg>
  );
}

export function PnpmIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#F69220">
      <path d="M0 0h7.2v7.2H0zm8.4 0h7.2v7.2H8.4zm8.4 0h7.2v7.2h-7.2zM8.4 8.4h7.2v7.2H8.4zm8.4 0h7.2v7.2h-7.2zM0 16.8h7.2V24H0zm8.4 0h7.2V24H8.4zm8.4 0h7.2V24h-7.2z"/>
    </svg>
  );
}

export function SEOIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
  );
}

export function RestAPIIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 7H5a2 2 0 0 0-2 2v8h2v-4h2v4h2V9a2 2 0 0 0-2-2zm0 4H5V9h2zm7-4h-4v10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 4h-2V9h2zm5-2v6h2V9h1V7h-4v2z"/>
    </svg>
  );
}

export function BcryptIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
    </svg>
  );
}

export function VercelBlobIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
    </svg>
  );
}

// Map from tech name to icon component  
export const techIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Next.js 16": NextjsIcon,
  "Next.js": NextjsIcon,
  "React 19": ReactIcon,
  "React": ReactIcon,
  "TypeScript": TypeScriptIcon,
  "Tailwind CSS v4": TailwindIcon,
  "Tailwind CSS": TailwindIcon,
  "Tailwind v4": TailwindIcon,
  "Framer Motion": FramerMotionIcon,
  "Lenis": LenisIcon,
  "HTML5/CSS3": HTML5Icon,
  "HTML5": HTML5Icon,
  "CSS3": CSS3Icon,
  "JavaScript ES6": JavaScriptIcon,
  "JavaScript": JavaScriptIcon,
  "Node.js": NodejsIcon,
  "Next.js Server Actions": NextjsIcon,
  "API Routes": RestAPIIcon,
  "Prisma": PrismaIcon,
  "PostgreSQL": PostgreSQLIcon,
  "NextAuth": NextAuthIcon,
  "Zod": ZodIcon,
  "Bcrypt": BcryptIcon,
  "Stripe": StripeIcon,
  "Resend": ResendIcon,
  "Vercel Blob": VercelBlobIcon,
  "Vitest": VitestIcon,
  "ESLint": ESLintIcon,
  "Git / GitHub": GitIcon,
  "Git": GitIcon,
  "GitHub": GitHubIcon,
  "Vercel": VercelIcon,
  "VS Code": VSCodeIcon,
  "pnpm": PnpmIcon,
  "C#": CSharpIcon,
  ".NET": DotNetIcon,
  "Python": PythonIcon,
  "SQL Server": SQLServerIcon,
  "REST APIs": RestAPIIcon,
  "SEO": SEOIcon,
  "Bootstrap": BootstrapIcon,
  "Responsive Design": CSS3Icon,
};

// All hero tech icons for the floating animation
export const heroTechItems = [
  { name: "Next.js", Icon: NextjsIcon },
  { name: "React", Icon: ReactIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "Tailwind", Icon: TailwindIcon },
  { name: "Node.js", Icon: NodejsIcon },
  { name: "Prisma", Icon: PrismaIcon },
  { name: "PostgreSQL", Icon: PostgreSQLIcon },
  { name: "Stripe", Icon: StripeIcon },
  { name: "Framer Motion", Icon: FramerMotionIcon },
  { name: "JavaScript", Icon: JavaScriptIcon },
  { name: "HTML5", Icon: HTML5Icon },
  { name: "CSS3", Icon: CSS3Icon },
  { name: "Git", Icon: GitIcon },
  { name: "Vercel", Icon: VercelIcon },
  { name: "Python", Icon: PythonIcon },
  { name: "C#", Icon: CSharpIcon },
  { name: ".NET", Icon: DotNetIcon },
  { name: "Zod", Icon: ZodIcon },
  { name: "ESLint", Icon: ESLintIcon },
  { name: "VS Code", Icon: VSCodeIcon },
];
