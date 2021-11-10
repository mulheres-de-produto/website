import Link from "next/link";

export default function Navbar({ children }) {
  return (
    <>
      <nav className="fixed bg-black h-88 p-4 px-6 top-0 inset-x-0 z-10">
        <div className="flex justify-between">
          <Link href="/">
            <a className="flex justify-start items-center p-0 px-6">
              <svg
                width="120"
                height="88"
                viewBox="0 0 866 303"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_6:52)">
                  <path
                    d="M450.52 81.78C454.173 84.84 456 89.9933 456 97.24V139.91C456 141.97 454.11 143 450.33 143H448.66C444.887 143 443 141.97 443 139.91V98.73C443 95.35 442.117 92.73 440.35 90.87C438.59 89.02 435.98 88.09 432.54 88.09C429.649 88.0415 426.827 88.9797 424.54 90.75C422.42 92.3361 420.552 94.2343 419 96.38V139.91C419 141.97 417.113 143 413.34 143H411.66C407.887 143 406 141.97 406 139.91V98.73C406 95.35 405.117 92.73 403.35 90.87C401.59 89.02 398.94 88.09 395.42 88.09C393.177 88.0759 390.97 88.6518 389.02 89.76C387.254 90.7174 385.637 91.9268 384.22 93.35C383.344 94.1595 382.596 95.0968 382 96.13V139.91C382 141.97 380.113 143 376.34 143H375.67C371.89 143 370 141.97 370 139.91V97.74C370.102 93.766 369.854 89.7907 369.26 85.86C368.77 83.39 368.52 81.99 368.52 81.66C368.52 80.51 369.52 79.66 371.6 79.19C373.454 78.7182 375.357 78.4698 377.27 78.45C377.861 78.4359 378.442 78.6065 378.931 78.9381C379.42 79.2698 379.794 79.7458 380 80.3C380.56 81.5082 380.993 82.7718 381.29 84.07C381.58 85.35 381.77 86.2 381.85 86.61C384.083 83.8827 386.824 81.6142 389.92 79.93C393.095 78.1347 396.683 77.1972 400.33 77.21C403.95 77.1552 407.533 77.939 410.8 79.5C413.983 81.0919 416.417 83.8665 417.58 87.23C420.012 84.3003 422.982 81.8632 426.33 80.05C429.587 78.2117 433.26 77.2342 437 77.21C441.91 77.0531 446.712 78.6761 450.52 81.78Z"
                    fill="#F6F6FA"
                  />
                  <path
                    d="M479.09 138.54C475.69 135.033 473.993 130.107 474 123.76V81.09C474 79.03 475.88 78 479.64 78H480.31C484.103 78 486 79.03 486 81.09V122.27C486 125.66 486.95 128.27 488.85 130.13C490.75 131.99 493.51 132.91 497.14 132.91C499.862 132.888 502.522 132.094 504.81 130.62C507.264 129.121 509.373 127.121 511 124.75V81.09C511 79.03 512.897 78 516.69 78H518.36C522.12 78 524 79.03 524 81.09V123.63C523.89 127.644 524.138 131.66 524.74 135.63C525.23 138.1 525.47 139.51 525.47 139.83C525.47 140.99 524.47 141.83 522.41 142.31C520.565 142.776 518.672 143.024 516.77 143.05C516.189 143.061 515.62 142.887 515.145 142.552C514.671 142.218 514.315 141.741 514.13 141.19C513.586 139.92 513.177 138.596 512.91 137.24C512.62 135.84 512.44 134.89 512.36 134.39C510.016 137.259 507.092 139.6 503.78 141.26C500.599 142.907 497.072 143.774 493.49 143.79C487.277 143.79 482.477 142.04 479.09 138.54Z"
                    fill="#F6F6FA"
                  />
                  <path
                    d="M548 139.85C544.667 137.083 543 132.487 543 126.06V53.06C543 51.02 544.913 50 548.74 50H550.14C554.04 50 556 51 556 53.09V125.44C556 128.407 556.553 130.487 557.66 131.68C558.249 132.291 558.963 132.769 559.754 133.079C560.544 133.39 561.392 133.527 562.24 133.48C563.249 133.496 564.256 133.392 565.24 133.17C565.842 132.994 566.463 132.89 567.09 132.86C567.94 132.86 568.66 133.74 569.25 135.52C569.747 136.801 570.05 138.149 570.15 139.52C570.15 142.48 566.75 143.963 559.95 143.97C555.601 144.076 551.359 142.614 548 139.85Z"
                    fill="#F6F6FA"
                  />
                  <path
                    d="M581 139.92V53.08C581 51.0267 582.913 50 586.74 50H587.29C591.09 50 593 51 593 53.08V86C595.43 83.5089 598.263 81.4465 601.38 79.9C604.559 78.3018 608.072 77.4794 611.63 77.5C616.611 77.3238 621.493 78.9181 625.41 82C629.137 85.06 631 90.2 631 97.42V139.92C631 141.97 629.09 143 625.29 143H624.64C620.88 143 619 141.97 619 139.91V98.73C619 95.35 618.06 92.73 616.18 90.87C614.3 89.01 611.523 88.0833 607.85 88.09C605.537 88.0769 603.26 88.6516 601.23 89.76C599.373 90.7167 597.684 91.9698 596.23 93.47C595.389 94.314 594.641 95.246 594 96.25V139.92C594 141.97 592 143 588.14 143H586.74C582.913 143 581 141.973 581 139.92Z"
                    fill="#F6F6FA"
                  />
                  <path
                    d="M646.58 110.67C646.58 99.5433 649.093 91.1567 654.12 85.51C659.147 79.8633 666.36 77.0267 675.76 77C684.427 77 690.9 79.8033 695.18 85.41C699.46 91.0167 701.603 98.9733 701.61 109.28C701.61 110.11 701.01 111.28 699.82 112.74C698.63 114.2 697.65 114.97 696.91 114.97H659.91C660.41 121.243 662.1 125.8 664.98 128.64C667.86 131.48 672.067 132.9 677.6 132.9C680.38 132.949 683.152 132.575 685.82 131.79C687.903 131.154 689.929 130.348 691.88 129.38C692.797 128.836 693.773 128.4 694.79 128.08C695.69 128.08 696.79 129.03 697.94 130.92C699.09 132.81 699.73 134.22 699.73 135.13C699.73 136.463 698.64 137.76 696.46 139.02C693.804 140.476 690.951 141.541 687.99 142.18C684.543 142.998 681.013 143.41 677.47 143.41C656.877 143.43 646.58 132.517 646.58 110.67ZM688.58 105C688.58 99.3133 687.49 94.98 685.31 92C683.13 89.02 679.853 87.5167 675.48 87.49C666.147 87.49 660.95 93.3433 659.89 105.05L688.58 105Z"
                    fill="#F6F6FA"
                  />
                  <path
                    d="M717 139.91V97.74C717.102 93.7652 716.848 89.7893 716.24 85.86C715.73 83.39 715.47 81.99 715.47 81.66C715.47 80.51 716.53 79.66 718.66 79.19C720.578 78.7185 722.545 78.4702 724.52 78.4499C725.099 78.4216 725.673 78.5725 726.163 78.8821C726.654 79.1917 727.037 79.6449 727.26 80.18C727.823 81.3652 728.253 82.6095 728.54 83.89C728.83 85.21 729.02 86.11 729.11 86.61C733.443 80.3433 738.287 77.21 743.64 77.21C745.62 77.0624 747.587 77.634 749.18 78.82C749.749 79.2827 750.208 79.8667 750.523 80.5293C750.838 81.1919 751.001 81.9164 751 82.65C750.962 84.3362 750.662 86.0062 750.11 87.6C749.51 89.41 748.83 90.32 748.11 90.32C747.216 90.2332 746.338 90.0246 745.5 89.6999C744.159 89.2725 742.758 89.0632 741.35 89.08C738.804 89.0494 736.335 89.953 734.41 91.62C732.739 92.9552 731.258 94.513 730.01 96.25V139.91C730.01 141.97 728.097 143 724.27 143H722.87C718.957 143 717 141.97 717 139.91Z"
                    fill="#F6F6FA"
                  />
                  <path
                    d="M758.5 110.67C758.5 99.5567 761 91.17 766 85.51C771 79.85 778.227 77.0133 787.68 77C796.347 77 802.82 79.8033 807.1 85.41C811.38 91.0167 813.523 98.9733 813.53 109.28C813.53 110.11 812.93 111.28 811.73 112.74C810.53 114.2 809.57 114.97 808.83 114.97H771.83C772.33 121.243 774.02 125.8 776.9 128.64C779.78 131.48 783.987 132.9 789.52 132.9C792.3 132.949 795.072 132.575 797.74 131.79C799.823 131.154 801.849 130.348 803.8 129.38C804.717 128.836 805.693 128.4 806.71 128.08C807.61 128.08 808.66 129.03 809.86 130.92C811.06 132.81 811.65 134.22 811.65 135.13C811.65 136.463 810.56 137.76 808.38 139.02C805.721 140.478 802.865 141.542 799.9 142.18C796.457 142.998 792.929 143.411 789.39 143.41C768.79 143.43 758.493 132.517 758.5 110.67ZM800.5 105C800.5 99.3133 799.407 94.98 797.22 92C795.033 89.02 791.757 87.5167 787.39 87.49C778.057 87.49 772.863 93.3433 771.81 105.05L800.5 105Z"
                    fill="#F6F6FA"
                  />
                  <path
                    d="M833.19 142.65C830.59 142.012 828.106 140.969 825.83 139.56C823.983 138.32 823.057 137.083 823.05 135.85C823.244 134.253 823.862 132.737 824.84 131.46C826.04 129.6 827.09 128.67 827.99 128.67C828.857 129.022 829.687 129.458 830.47 129.97C832.081 130.898 833.779 131.665 835.54 132.26C837.612 132.952 839.786 133.29 841.97 133.26C849.137 133.26 852.723 130.373 852.73 124.6C852.781 123.456 852.561 122.317 852.089 121.274C851.616 120.232 850.904 119.315 850.01 118.6C848.19 117.16 845.14 115.74 840.86 114.34C835.08 112.607 830.917 110.317 828.37 107.47C825.823 104.623 824.543 100.73 824.53 95.79C824.443 93.2623 824.919 90.7469 825.924 88.4259C826.929 86.1049 828.437 84.0364 830.34 82.37C834.22 78.95 839.293 77.24 845.56 77.24C849.535 77.1889 853.495 77.7488 857.3 78.9C860.853 80.0067 862.627 81.3867 862.62 83.04C862.489 84.7071 861.961 86.3187 861.08 87.74C860.08 89.64 859.08 90.58 858.17 90.58C857.025 90.1237 855.909 89.596 854.83 89C852.416 87.9449 849.792 87.4557 847.16 87.57C844.701 87.4724 842.267 88.0982 840.16 89.37C839.306 89.8897 838.605 90.6259 838.127 91.504C837.649 92.3821 837.412 93.3708 837.44 94.37C837.395 95.5244 837.611 96.6741 838.072 97.7336C838.532 98.7931 839.225 99.7352 840.1 100.49C842.57 102.386 845.356 103.828 848.33 104.75C851.897 105.874 855.32 107.411 858.53 109.33C860.808 110.736 862.649 112.748 863.85 115.14C865.053 117.906 865.623 120.906 865.52 123.92C865.567 127.553 864.556 131.122 862.61 134.19C860.655 137.257 857.885 139.719 854.61 141.3C850.994 143.054 847.018 143.937 843 143.88C839.69 143.905 836.391 143.491 833.19 142.65Z"
                    fill="#F6F6FA"
                  />
                  <path
                    d="M366.53 236C363.226 233.403 360.706 229.942 359.25 226C357.445 221.268 356.565 216.234 356.66 211.17C356.533 205.93 357.468 200.719 359.41 195.85C360.981 191.908 363.659 188.505 367.12 186.05C370.563 183.75 374.631 182.566 378.77 182.66C381.395 182.617 384.007 183.047 386.48 183.93C388.811 184.82 391.005 186.032 393 187.53V161.65C393 159.877 394.617 158.993 397.85 159H399C402.333 159 404 159.883 404 161.65V222.28C403.909 225.719 404.127 229.16 404.65 232.56C405.08 234.68 405.29 235.88 405.29 236.16C405.29 237.16 404.39 237.86 402.6 238.28C400.963 238.684 399.286 238.899 397.6 238.92C397.095 238.934 396.598 238.788 396.181 238.502C395.765 238.217 395.449 237.806 395.28 237.33C394.807 236.257 394.445 235.137 394.2 233.99C393.95 232.82 393.79 231.99 393.72 231.6C388.973 236.933 383.507 239.6 377.32 239.6C373.422 239.64 369.623 238.373 366.53 236ZM386.85 228.11C389.177 226.77 391.257 225.042 393 223V195.41C389.738 192.843 385.701 191.46 381.55 191.49C377.243 191.49 373.993 193.08 371.8 196.26C369.607 199.44 368.513 204.07 368.52 210.15C368.52 216.51 369.52 221.403 371.52 224.83C372.352 226.417 373.612 227.74 375.156 228.648C376.701 229.556 378.469 230.014 380.26 229.97C382.582 229.939 384.855 229.298 386.85 228.11Z"
                    fill="#F6F6FA"
                  />
                  <path
                    d="M417.21 211.29C417.21 201.75 419.363 194.56 423.67 189.72C427.977 184.88 434.16 182.46 442.22 182.46C449.64 182.46 455.187 184.863 458.86 189.67C462.533 194.477 464.37 201.293 464.37 210.12C464.18 211.253 463.646 212.301 462.84 213.12C461.84 214.39 460.98 215.03 460.35 215.03H428.66C429.08 220.403 430.527 224.307 433 226.74C435.473 229.173 439.077 230.393 443.81 230.4C446.197 230.43 448.575 230.093 450.86 229.4C452.645 228.86 454.381 228.171 456.05 227.34C456.837 226.878 457.672 226.503 458.54 226.22C459.32 226.22 460.22 227.04 461.25 228.66C462.047 229.72 462.572 230.96 462.78 232.27C462.78 233.397 461.847 234.507 459.98 235.6C457.704 236.849 455.258 237.762 452.72 238.31C449.771 239.01 446.751 239.366 443.72 239.37C426.047 239.377 417.21 230.017 417.21 211.29ZM453.21 206C453.21 201.12 452.273 197.393 450.4 194.82C448.52 192.24 445.72 190.95 441.97 190.95C433.97 190.95 429.52 195.967 428.62 206H453.21Z"
                    fill="#F6F6FA"
                  />
                  <path
                    d="M503 257.46V199.46C503.091 196.058 502.877 192.654 502.36 189.29C501.93 187.17 501.72 185.97 501.72 185.68C501.72 184.68 502.61 183.99 504.39 183.56C505.997 183.162 507.645 182.95 509.3 182.93C509.801 182.917 510.293 183.056 510.713 183.329C511.133 183.602 511.46 183.997 511.65 184.46C512.143 185.474 512.519 186.541 512.77 187.64C513.02 188.74 513.18 189.46 513.25 189.82C515.633 186.988 518.647 184.755 522.05 183.3C524.241 182.397 526.581 181.912 528.95 181.87C533.04 181.696 537.064 182.951 540.33 185.42C543.59 188.019 546.051 191.485 547.43 195.42C549.157 200.228 549.991 205.312 549.89 210.42C549.89 219.32 547.913 226.28 543.96 231.3C540.007 236.32 534.673 238.827 527.96 238.82C525.377 238.867 522.807 238.436 520.38 237.55C518.086 236.654 515.929 235.442 513.97 233.95V257.48C513.97 259.173 512.333 260.02 509.06 260.02H507.88C504.627 260.007 503 259.153 503 257.46ZM535.14 225.2C537.3 222.02 538.38 217.39 538.38 211.31C538.38 204.95 537.38 200.057 535.38 196.63C534.562 195.042 533.313 193.718 531.775 192.808C530.238 191.899 528.475 191.442 526.69 191.49C524.339 191.515 522.035 192.156 520.01 193.35C517.716 194.687 515.683 196.429 514.01 198.49V226.05C517.243 228.666 521.292 230.064 525.45 230C529.763 230 532.993 228.4 535.14 225.2Z"
                    fill="#F6F6FA"
                  />
                  <path
                    d="M564 236.35V200.21C564.089 196.804 563.872 193.397 563.35 190.03C562.92 187.91 562.71 186.71 562.71 186.43C562.71 185.43 563.6 184.73 565.4 184.31C567.037 183.906 568.714 183.691 570.4 183.67C570.893 183.65 571.38 183.782 571.795 184.049C572.21 184.315 572.533 184.703 572.72 185.16C573.199 186.176 573.561 187.243 573.8 188.34C574.05 189.47 574.21 190.25 574.29 190.67C577.95 185.303 582.047 182.617 586.58 182.61C588.259 182.483 589.927 182.974 591.27 183.99C591.758 184.389 592.152 184.89 592.424 185.459C592.695 186.028 592.837 186.65 592.84 187.28C592.807 188.724 592.551 190.154 592.08 191.52C591.58 193.07 591 193.85 590.35 193.85C589.592 193.775 588.849 193.597 588.14 193.32C587.01 192.956 585.828 192.777 584.64 192.79C582.479 192.762 580.385 193.535 578.76 194.96C577.344 196.118 576.093 197.464 575.04 198.96V236.37C575.04 238.143 573.423 239.027 570.19 239.02H569C565.667 239.007 564 238.117 564 236.35Z"
                    fill="#F6F6FA"
                  />
                  <path
                    d="M605.65 231.93C601.41 227.09 599.29 220.09 599.29 210.93C599.29 201.77 601.447 194.703 605.76 189.73C610.073 184.79 616.22 182.317 624.2 182.31C632.18 182.303 638.273 184.76 642.48 189.68C646.693 194.593 648.797 201.677 648.79 210.93C648.783 220.183 646.7 227.183 642.54 231.93C638.373 236.77 632.26 239.19 624.2 239.19C616.14 239.19 609.957 236.77 605.65 231.93ZM634.32 225.41C636.547 222.23 637.66 217.353 637.66 210.78C637.66 204.207 636.547 199.313 634.32 196.1C632.107 192.887 628.667 191.28 624 191.28C619.41 191.28 616 192.89 613.83 196.1C611.66 199.31 610.54 204.21 610.54 210.78C610.54 217.35 611.62 222.23 613.77 225.41C615.92 228.59 619.34 230.18 624 230.18C628.66 230.18 632.1 228.59 634.32 225.41Z"
                    fill="#F6F6FA"
                  />
                  <path
                    d="M668.53 236C665.226 233.403 662.706 229.942 661.25 226C659.445 221.268 658.565 216.234 658.66 211.17C658.532 205.93 659.468 200.719 661.41 195.85C662.981 191.908 665.659 188.505 669.12 186.05C672.563 183.75 676.631 182.566 680.77 182.66C683.395 182.617 686.007 183.047 688.48 183.93C690.811 184.82 693.005 186.032 695 187.53V161.65C695 159.877 696.617 158.993 699.85 159H701C704.333 159 706 159.883 706 161.65V222.28C705.909 225.719 706.127 229.16 706.65 232.56C707.08 234.68 707.29 235.88 707.29 236.16C707.29 237.16 706.39 237.86 704.6 238.28C702.963 238.684 701.286 238.899 699.6 238.92C699.095 238.934 698.598 238.788 698.181 238.502C697.765 238.217 697.449 237.806 697.28 237.33C696.807 236.257 696.445 235.137 696.2 233.99C695.95 232.82 695.79 231.99 695.72 231.6C690.973 236.933 685.507 239.6 679.32 239.6C675.422 239.64 671.623 238.373 668.53 236ZM688.85 228.11C691.177 226.77 693.257 225.042 695 223V195.41C691.738 192.843 687.701 191.46 683.55 191.49C679.243 191.49 675.993 193.08 673.8 196.26C671.607 199.44 670.513 204.07 670.52 210.15C670.52 216.51 671.52 221.403 673.52 224.83C674.352 226.417 675.611 227.74 677.156 228.648C678.701 229.556 680.469 230.014 682.26 229.97C684.582 229.939 686.855 229.298 688.85 228.11Z"
                    fill="#F6F6FA"
                  />
                  <path
                    d="M726.37 234.88C723.463 231.88 722.007 227.66 722 222.22V185.65C722 183.877 723.617 182.993 726.85 183H728.22C731.407 183 733 183.883 733 185.65V220.94C732.924 222.165 733.096 223.393 733.507 224.549C733.918 225.706 734.558 226.767 735.39 227.67C736.99 229.263 739.323 230.06 742.39 230.06C744.684 230.027 746.92 229.332 748.83 228.06C750.892 226.773 752.663 225.07 754.03 223.06V185.65C754.03 183.877 755.623 182.993 758.81 183H760.18C763.413 183 765.03 183.883 765.03 185.65V222.11C764.94 225.549 765.151 228.988 765.66 232.39C766.08 234.51 766.3 235.71 766.3 235.99C766.3 236.99 765.42 237.69 763.66 238.11C762.075 238.516 760.446 238.731 758.81 238.75C758.313 238.761 757.826 238.612 757.419 238.326C757.012 238.04 756.708 237.632 756.55 237.16C756.082 236.069 755.727 234.933 755.49 233.77C755.25 232.57 755.09 231.77 755.02 231.33C753.002 233.788 750.487 235.792 747.64 237.21C744.904 238.626 741.871 239.373 738.79 239.39C733.43 239.39 729.29 237.887 726.37 234.88Z"
                    fill="#F6F6FA"
                  />
                  <path
                    d="M787.83 235.61C785.277 233.25 784 229.313 784 223.8V192H779.56C779.185 192.03 778.809 191.963 778.467 191.805C778.126 191.648 777.83 191.405 777.61 191.1C777.132 190.205 776.92 189.192 777 188.18V186.68C776.925 185.705 777.134 184.729 777.6 183.87C777.814 183.575 778.1 183.34 778.431 183.187C778.762 183.035 779.127 182.97 779.49 183H783.83L785.24 172.56C785.46 170.853 786.833 170 789.36 170H791.1C793.7 170 795 170.853 795 172.56V183H802.63C802.983 182.978 803.335 183.049 803.651 183.207C803.968 183.365 804.236 183.604 804.43 183.9C804.876 184.802 805.073 185.807 805 186.81V188.19C805.073 189.193 804.876 190.198 804.43 191.1C804.236 191.396 803.968 191.635 803.651 191.793C803.335 191.951 802.983 192.022 802.63 192H794V223.27C794 225.81 794.4 227.6 795.21 228.62C795.638 229.139 796.183 229.549 796.8 229.816C797.417 230.084 798.089 230.202 798.76 230.16C799.529 230.176 800.296 230.085 801.04 229.89C801.497 229.745 801.971 229.658 802.45 229.63C803.09 229.63 803.64 230.39 804.1 231.9C804.477 233.015 804.705 234.175 804.78 235.35C804.78 237.89 802.19 239.16 797.01 239.16C793.603 239.226 790.306 237.951 787.83 235.61Z"
                    fill="#F6F6FA"
                  />
                  <path
                    d="M821.12 231.93C816.887 227.09 814.77 220.09 814.77 210.93C814.77 201.77 816.923 194.703 821.23 189.73C825.537 184.79 831.683 182.317 839.67 182.31C847.657 182.303 853.767 184.747 858 189.64C862.2 194.553 864.3 201.637 864.3 210.89C864.3 220.143 862.217 227.143 858.05 231.89C853.883 236.73 847.77 239.15 839.71 239.15C831.65 239.15 825.453 236.743 821.12 231.93ZM849.79 225.41C852.023 222.23 853.137 217.353 853.13 210.78C853.123 204.207 852.01 199.313 849.79 196.1C847.57 192.887 844.127 191.28 839.46 191.28C834.793 191.28 831.403 192.887 829.29 196.1C827.09 199.32 825.993 204.213 826 210.78C826.007 217.347 827.083 222.223 829.23 225.41C831.39 228.59 834.8 230.18 839.46 230.18C844.12 230.18 847.563 228.59 849.79 225.41Z"
                    fill="#F6F6FA"
                  />
                  <path
                    d="M151.41 0.359985C121.545 0.359985 92.3507 9.21598 67.5189 25.8081C42.6871 42.4002 23.333 65.9831 11.9042 93.5748C0.475338 121.166 -2.51497 151.527 3.3114 180.819C9.13777 210.11 23.5191 237.015 44.6369 258.133C65.7546 279.251 92.6602 293.632 121.951 299.459C151.242 305.285 181.604 302.295 209.195 290.866C236.787 279.437 260.37 260.083 276.962 235.251C293.554 210.419 302.41 181.225 302.41 151.36C302.41 111.312 286.501 72.9049 258.183 44.5869C229.865 16.2689 191.458 0.359985 151.41 0.359985ZM103.41 232.45C103.41 234.016 102.789 235.517 101.683 236.625C100.576 237.734 99.0757 238.357 97.51 238.36H70.31C68.7443 238.357 67.2436 237.734 66.1374 236.625C65.0313 235.517 64.41 234.016 64.41 232.45V104.39L103.41 145.21V232.45ZM119.52 151.39L69.52 98.49C69.22 98.17 68.87 97.83 68.37 97.33C65 94 63.38 91.86 64.22 89.85C72.4 78.12 91.52 71.85 95.04 72.23H95.37C98.04 72.23 100.61 74.96 101.7 76.13L144.7 121.72L123.23 145C121.54 146.832 120.273 149.014 119.52 151.39ZM188.41 143.85L158 176.8C156.372 178.549 154.119 179.584 151.732 179.681C149.345 179.779 147.015 178.93 145.25 177.32L130.13 163.38C129.256 162.579 128.549 161.612 128.049 160.537C127.55 159.461 127.268 158.298 127.22 157.113C127.171 155.928 127.358 154.746 127.768 153.633C128.178 152.52 128.804 151.5 129.61 150.63L188.37 86.88L188.41 143.85ZM235.41 233.36C235.41 235.217 234.672 236.997 233.36 238.31C232.047 239.622 230.267 240.36 228.41 240.36H203.41C201.553 240.36 199.773 239.622 198.46 238.31C197.147 236.997 196.41 235.217 196.41 233.36V81.36C196.41 79.5035 197.147 77.723 198.46 76.4102C199.773 75.0975 201.553 74.36 203.41 74.36H228.41C230.267 74.36 232.047 75.0975 233.36 76.4102C234.672 77.723 235.41 79.5035 235.41 81.36V233.36Z"
                    fill="#F6F6FA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6:52">
                    <rect width="865.47" height="302.09" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </Link>
          <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
              <Link href="/">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-white items-center justify-center hover:opacity-80 ">
                  INÍCIO
                </a>
              </Link>
              <Link href="/vagas">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-white items-center justify-center hover:opacity-80">
                  VAGAS
                </a>
              </Link>
              <Link href="/quem-somos">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-white items-center justify-center  hover:opacity-80">
                  QUEM SOMOS
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}