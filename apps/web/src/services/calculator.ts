import { _fetchJson } from "utils/fetch";

import type { ChartDataObject, ChartDataPoint } from "types/calculator/plot";

const DECIMALS = 4;

const lookupData: { [id: string]: Array<ChartDataPoint> } = {
  "0.0000": [
    { name: "2023", scc: 1547.064 },
    { name: "2024", scc: 1546.3384 },
    { name: "2025", scc: 1545.5836 },
    { name: "2026", scc: 1544.8094 },
    { name: "2027", scc: 1544.0228 },
    { name: "2028", scc: 1543.2253 },
    { name: "2029", scc: 1542.4148 },
    { name: "2030", scc: 1544.7188 },
    { name: "2031", scc: 1543.8712 },
    { name: "2032", scc: 1543.0078 },
    { name: "2033", scc: 1542.1202 },
    { name: "2034", scc: 1541.1947 },
    { name: "2035", scc: 1540.2218 },
    { name: "2036", scc: 1539.1952 },
    { name: "2037", scc: 1538.1061 },
    { name: "2038", scc: 1536.9398 },
    { name: "2039", scc: 1535.6759 },
    { name: "2040", scc: 1534.2698 },
    { name: "2041", scc: 1532.7141 },
    { name: "2042", scc: 1530.9993 },
    { name: "2043", scc: 1529.1945 },
    { name: "2044", scc: 1527.3285 },
    { name: "2045", scc: 1525.381 },
    { name: "2046", scc: 1523.3466 },
    { name: "2047", scc: 1521.2288 },
    { name: "2048", scc: 1519.0356 },
    { name: "2049", scc: 1516.7883 },
    { name: "2050", scc: 1514.5128 },
  ],
  "0.0025": [
    { name: "2023", scc: 988.37714 },
    { name: "2024", scc: 990.3159 },
    { name: "2025", scc: 992.23645 },
    { name: "2026", scc: 994.14624 },
    { name: "2027", scc: 996.0499 },
    { name: "2028", scc: 997.9474 },
    { name: "2029", scc: 999.83563 },
    { name: "2030", scc: 1003.5456 },
    { name: "2031", scc: 1005.4078 },
    { name: "2032", scc: 1007.25806 },
    { name: "2033", scc: 1009.08923 },
    { name: "2034", scc: 1010.8903 },
    { name: "2035", scc: 1012.65314 },
    { name: "2036", scc: 1014.37225 },
    { name: "2037", scc: 1016.0384 },
    { name: "2038", scc: 1017.6364 },
    { name: "2039", scc: 1019.1447 },
    { name: "2040", scc: 1020.524 },
    { name: "2041", scc: 1021.7516 },
    { name: "2042", scc: 1022.8236 },
    { name: "2043", scc: 1023.8087 },
    { name: "2044", scc: 1024.7363 },
    { name: "2045", scc: 1025.5874 },
    { name: "2046", scc: 1026.3583 },
    { name: "2047", scc: 1027.0531 },
    { name: "2048", scc: 1027.6804 },
    { name: "2049", scc: 1028.2596 },
    { name: "2050", scc: 1028.8148 },
  ],
  "0.0050": [
    { name: "2023", scc: 652.6035 },
    { name: "2024", scc: 655.4464 },
    { name: "2025", scc: 658.2845 },
    { name: "2026", scc: 661.1239 },
    { name: "2027", scc: 663.9677 },
    { name: "2028", scc: 666.81506 },
    { name: "2029", scc: 669.66235 },
    { name: "2030", scc: 673.58563 },
    { name: "2031", scc: 676.4253 },
    { name: "2032", scc: 679.26227 },
    { name: "2033", scc: 682.0905 },
    { name: "2034", scc: 684.90063 },
    { name: "2035", scc: 687.68536 },
    { name: "2036", scc: 690.4399 },
    { name: "2037", scc: 693.1548 },
    { name: "2038", scc: 695.8146 },
    { name: "2039", scc: 698.39716 },
    { name: "2040", scc: 700.8662 },
    { name: "2041", scc: 703.1898 },
    { name: "2042", scc: 705.3673 },
    { name: "2043", scc: 707.46674 },
    { name: "2044", scc: 709.51794 },
    { name: "2045", scc: 711.50275 },
    { name: "2046", scc: 713.41846 },
    { name: "2047", scc: 715.26996 },
    { name: "2048", scc: 717.0656 },
    { name: "2049", scc: 718.8241 },
    { name: "2050", scc: 720.5679 },
  ],
  "0.0075": [
    { name: "2023", scc: 445.81784 },
    { name: "2024", scc: 448.80655 },
    { name: "2025", scc: 451.8014 },
    { name: "2026", scc: 454.8076 },
    { name: "2027", scc: 457.82745 },
    { name: "2028", scc: 460.85968 },
    { name: "2029", scc: 463.90012 },
    { name: "2030", scc: 467.58188 },
    { name: "2031", scc: 470.6307 },
    { name: "2032", scc: 473.68558 },
    { name: "2033", scc: 476.7411 },
    { name: "2034", scc: 479.789 },
    { name: "2035", scc: 482.82294 },
    { name: "2036", scc: 485.83826 },
    { name: "2037", scc: 488.82587 },
    { name: "2038", scc: 491.76987 },
    { name: "2039", scc: 494.64807 },
    { name: "2040", scc: 497.42593 },
    { name: "2041", scc: 500.06573 },
    { name: "2042", scc: 502.56848 },
    { name: "2043", scc: 505.00192 },
    { name: "2044", scc: 507.39594 },
    { name: "2045", scc: 509.7331 },
    { name: "2046", scc: 512.0112 },
    { name: "2047", scc: 514.2357 },
    { name: "2048", scc: 516.4149 },
    { name: "2049", scc: 518.56683 },
    { name: "2050", scc: 520.7131 },
  ],
  "0.0100": [
    { name: "2023", scc: 315.0641 },
    { name: "2024", scc: 317.89774 },
    { name: "2025", scc: 320.74533 },
    { name: "2026", scc: 323.6115 },
    { name: "2027", scc: 326.49817 },
    { name: "2028", scc: 329.40366 },
    { name: "2029", scc: 332.32373 },
    { name: "2030", scc: 335.62918 },
    { name: "2031", scc: 338.56924 },
    { name: "2032", scc: 341.52206 },
    { name: "2033", scc: 344.4827 },
    { name: "2034", scc: 347.4438 },
    { name: "2035", scc: 350.39954 },
    { name: "2036", scc: 353.34564 },
    { name: "2037", scc: 356.27313 },
    { name: "2038", scc: 359.16614 },
    { name: "2039", scc: 362.00226 },
    { name: "2040", scc: 364.7481 },
    { name: "2041", scc: 367.36237 },
    { name: "2042", scc: 369.84686 },
    { name: "2043", scc: 372.2688 },
    { name: "2044", scc: 374.65833 },
    { name: "2045", scc: 376.99835 },
    { name: "2046", scc: 379.2872 },
    { name: "2047", scc: 381.53046 },
    { name: "2048", scc: 383.7365 },
    { name: "2049", scc: 385.92294 },
    { name: "2050", scc: 388.11066 },
  ],
  "0.0125": [
    { name: "2023", scc: 230.05081 },
    { name: "2024", scc: 232.63136 },
    { name: "2025", scc: 235.23105 },
    { name: "2026", scc: 237.85426 },
    { name: "2027", scc: 240.50258 },
    { name: "2028", scc: 243.17421 },
    { name: "2029", scc: 245.86484 },
    { name: "2030", scc: 248.789 },
    { name: "2031", scc: 251.50754 },
    { name: "2032", scc: 254.24353 },
    { name: "2033", scc: 256.99255 },
    { name: "2034", scc: 259.74783 },
    { name: "2035", scc: 262.50406 },
    { name: "2036", scc: 265.25723 },
    { name: "2037", scc: 267.99854 },
    { name: "2038", scc: 270.71213 },
    { name: "2039", scc: 273.3756 },
    { name: "2040", scc: 275.9563 },
    { name: "2041", scc: 278.4105 },
    { name: "2042", scc: 280.7403 },
    { name: "2043", scc: 283.01254 },
    { name: "2044", scc: 285.25742 },
    { name: "2045", scc: 287.45816 },
    { name: "2046", scc: 289.61334 },
    { name: "2047", scc: 291.72876 },
    { name: "2048", scc: 293.81277 },
    { name: "2049", scc: 295.88263 },
    { name: "2050", scc: 297.95874 },
  ],
  "0.0150": [
    { name: "2023", scc: 173.17104 },
    { name: "2024", scc: 175.4859 },
    { name: "2025", scc: 177.82332 },
    { name: "2026", scc: 180.18745 },
    { name: "2027", scc: 182.57976 },
    { name: "2028", scc: 184.99834 },
    { name: "2029", scc: 187.43889 },
    { name: "2030", scc: 190.02248 },
    { name: "2031", scc: 192.49619 },
    { name: "2032", scc: 194.99065 },
    { name: "2033", scc: 197.50175 },
    { name: "2034", scc: 200.0233 },
    { name: "2035", scc: 202.5503 },
    { name: "2036", scc: 205.07907 },
    { name: "2037", scc: 207.60094 },
    { name: "2038", scc: 210.10019 },
    { name: "2039", scc: 212.55438 },
    { name: "2040", scc: 214.93138 },
    { name: "2041", scc: 217.18579 },
    { name: "2042", scc: 219.31982 },
    { name: "2043", scc: 221.39978 },
    { name: "2044", scc: 223.45592 },
    { name: "2045", scc: 225.47174 },
    { name: "2046", scc: 227.44597 },
    { name: "2047", scc: 229.38448 },
    { name: "2048", scc: 231.29558 },
    { name: "2049", scc: 233.1963 },
    { name: "2050", scc: 235.1067 },
  ],
  "0.0175": [
    { name: "2023", scc: 134.00871 },
    { name: "2024", scc: 136.07788 },
    { name: "2025", scc: 138.1718 },
    { name: "2026", scc: 140.29446 },
    { name: "2027", scc: 142.44727 },
    { name: "2028", scc: 144.62831 },
    { name: "2029", scc: 146.83331 },
    { name: "2030", scc: 149.12733 },
    { name: "2031", scc: 151.36894 },
    { name: "2032", scc: 153.63359 },
    { name: "2033", scc: 155.91748 },
    { name: "2034", scc: 158.21478 },
    { name: "2035", scc: 160.52086 },
    { name: "2036", scc: 162.83228 },
    { name: "2037", scc: 165.14055 },
    { name: "2038", scc: 167.43005 },
    { name: "2039", scc: 169.67844 },
    { name: "2040", scc: 171.85384 },
    { name: "2041", scc: 173.90977 },
    { name: "2042", scc: 175.84828 },
    { name: "2043", scc: 177.73518 },
    { name: "2044", scc: 179.60077 },
    { name: "2045", scc: 181.42871 },
    { name: "2046", scc: 183.21783 },
    { name: "2047", scc: 184.97406 },
    { name: "2048", scc: 186.70563 },
    { name: "2049", scc: 188.42937 },
    { name: "2050", scc: 190.16507 },
  ],
  "0.0200": [
    { name: "2023", scc: 106.282646 },
    { name: "2024", scc: 108.13567 },
    { name: "2025", scc: 110.01479 },
    { name: "2026", scc: 111.92398 },
    { name: "2027", scc: 113.86454 },
    { name: "2028", scc: 115.83461 },
    { name: "2029", scc: 117.82995 },
    { name: "2030", scc: 119.882225 },
    { name: "2031", scc: 121.91653 },
    { name: "2032", scc: 123.975464 },
    { name: "2033", scc: 126.055504 },
    { name: "2034", scc: 128.15117 },
    { name: "2035", scc: 130.2581 },
    { name: "2036", scc: 132.37311 },
    { name: "2037", scc: 134.48787 },
    { name: "2038", scc: 136.58693 },
    { name: "2039", scc: 138.64796 },
    { name: "2040", scc: 140.63936 },
    { name: "2041", scc: 142.51384 },
    { name: "2042", scc: 144.27315 },
    { name: "2043", scc: 145.9826 },
    { name: "2044", scc: 147.67255 },
    { name: "2045", scc: 149.32675 },
    { name: "2046", scc: 150.94409 },
    { name: "2047", scc: 152.5305 },
    { name: "2048", scc: 154.09415 },
    { name: "2049", scc: 155.65166 },
    { name: "2050", scc: 157.22264 },
  ],
  "0.0225": [
    { name: "2023", scc: 86.12657 },
    { name: "2024", scc: 87.793144 },
    { name: "2025", scc: 89.48664 },
    { name: "2026", scc: 91.21099 },
    { name: "2027", scc: 92.9675 },
    { name: "2028", scc: 94.75434 },
    { name: "2029", scc: 96.56733 },
    { name: "2030", scc: 98.41842 },
    { name: "2031", scc: 100.27198 },
    { name: "2032", scc: 102.15134 },
    { name: "2033", scc: 104.053185 },
    { name: "2034", scc: 105.972336 },
    { name: "2035", scc: 107.90471 },
    { name: "2036", scc: 109.8473 },
    { name: "2037", scc: 111.791985 },
    { name: "2038", scc: 113.72346 },
    { name: "2039", scc: 115.61949 },
    { name: "2040", scc: 117.44863 },
    { name: "2041", scc: 119.162994 },
    { name: "2042", scc: 120.763985 },
    { name: "2043", scc: 122.31643 },
    { name: "2044", scc: 123.85067 },
    { name: "2045", scc: 125.35058 },
    { name: "2046", scc: 126.815025 },
    { name: "2047", scc: 128.24992 },
    { name: "2048", scc: 129.66338 },
    { name: "2049", scc: 131.07182 },
    { name: "2050", scc: 132.49472 },
  ],
  "0.0250": [
    { name: "2023", scc: 71.10864 },
    { name: "2024", scc: 72.61528 },
    { name: "2025", scc: 74.1493 },
    { name: "2026", scc: 75.71464 },
    { name: "2027", scc: 77.31261 },
    { name: "2028", scc: 78.94142 },
    { name: "2029", scc: 80.596985 },
    { name: "2030", scc: 82.27987 },
    { name: "2031", scc: 83.97714 },
    { name: "2032", scc: 85.70106 },
    { name: "2033", scc: 87.44853 },
    { name: "2034", scc: 89.214645 },
    { name: "2035", scc: 90.99553 },
    { name: "2036", scc: 92.7884 },
    { name: "2037", scc: 94.58532 },
    { name: "2038", scc: 96.371124 },
    { name: "2039", scc: 98.12371 },
    { name: "2040", scc: 99.811745 },
    { name: "2041", scc: 101.38689 },
    { name: "2042", scc: 102.85014 },
    { name: "2043", scc: 104.26585 },
    { name: "2044", scc: 105.66434 },
    { name: "2045", scc: 107.02956 },
    { name: "2046", scc: 108.36035 },
    { name: "2047", scc: 109.6626 },
    { name: "2048", scc: 110.944305 },
    { name: "2049", scc: 112.22177 },
    { name: "2050", scc: 113.51428 },
  ],
  "0.0275": [
    { name: "2023", scc: 59.664703 },
    { name: "2024", scc: 61.03395 },
    { name: "2025", scc: 62.430813 },
    { name: "2026", scc: 63.859215 },
    { name: "2027", scc: 65.3205 },
    { name: "2028", scc: 66.81296 },
    { name: "2029", scc: 68.33254 },
    { name: "2030", scc: 69.87358 },
    { name: "2031", scc: 71.435715 },
    { name: "2032", scc: 73.02514 },
    { name: "2033", scc: 74.638954 },
    { name: "2034", scc: 76.272484 },
    { name: "2035", scc: 77.92208 },
    { name: "2036", scc: 79.58515 },
    { name: "2037", scc: 81.25395 },
    { name: "2038", scc: 82.91348 },
    { name: "2039", scc: 84.54175 },
    { name: "2040", scc: 86.10752 },
    { name: "2041", scc: 87.56211 },
    { name: "2042", scc: 88.90609 },
    { name: "2043", scc: 90.20331 },
    { name: "2044", scc: 91.4841 },
    { name: "2045", scc: 92.73243 },
    { name: "2046", scc: 93.94714 },
    { name: "2047", scc: 95.134026 },
    { name: "2048", scc: 96.30102 },
    { name: "2049", scc: 97.46425 },
    { name: "2050", scc: 98.6429 },
  ],
  "0.0300": [
    { name: "2023", scc: 50.765656 },
    { name: "2024", scc: 52.016308 },
    { name: "2025", scc: 53.294632 },
    { name: "2026", scc: 54.604565 },
    { name: "2027", scc: 55.947495 },
    { name: "2028", scc: 57.32176 },
    { name: "2029", scc: 58.723415 },
    { name: "2030", scc: 60.14361 },
    { name: "2031", scc: 61.588413 },
    { name: "2032", scc: 63.06101 },
    { name: "2033", scc: 64.55867 },
    { name: "2034", scc: 66.07695 },
    { name: "2035", scc: 67.6124 },
    { name: "2036", scc: 69.1626 },
    { name: "2037", scc: 70.72002 },
    { name: "2038", scc: 72.269806 },
    { name: "2039", scc: 73.790115 },
    { name: "2040", scc: 75.24978 },
    { name: "2041", scc: 76.59985 },
    { name: "2042", scc: 77.840454 },
    { name: "2043", scc: 79.034935 },
    { name: "2044", scc: 80.21363 },
    { name: "2045", scc: 81.360535 },
    { name: "2046", scc: 82.474434 },
    { name: "2047", scc: 83.56106 },
    { name: "2048", scc: 84.628235 },
    { name: "2049", scc: 85.69196 },
    { name: "2050", scc: 86.77129 },
  ],
  "0.0325": [
    { name: "2023", scc: 43.719006 },
    { name: "2024", scc: 44.86664 },
    { name: "2025", scc: 46.041874 },
    { name: "2026", scc: 47.248676 },
    { name: "2027", scc: 48.48847 },
    { name: "2028", scc: 49.75967 },
    { name: "2029", scc: 51.05841 },
    { name: "2030", scc: 52.37456 },
    { name: "2031", scc: 53.716896 },
    { name: "2032", scc: 55.087418 },
    { name: "2033", scc: 56.48356 },
    { name: "2034", scc: 57.901085 },
    { name: "2035", scc: 59.336727 },
    { name: "2036", scc: 60.78827 },
    { name: "2037", scc: 62.248352 },
    { name: "2038", scc: 63.702312 },
    { name: "2039", scc: 65.12843 },
    { name: "2040", scc: 66.49562 },
    { name: "2041", scc: 67.75472 },
    { name: "2042", scc: 68.90538 },
    { name: "2043", scc: 70.010475 },
    { name: "2044", scc: 71.10032 },
    { name: "2045", scc: 72.15892 },
    { name: "2046", scc: 73.18502 },
    { name: "2047", scc: 74.184265 },
    { name: "2048", scc: 75.16438 },
    { name: "2049", scc: 76.14122 },
    { name: "2050", scc: 77.13374 },
  ],
  "0.0350": [
    { name: "2023", scc: 38.048443 },
    { name: "2024", scc: 39.105965 },
    { name: "2025", scc: 40.190937 },
    { name: "2026", scc: 41.307346 },
    { name: "2027", scc: 42.456665 },
    { name: "2028", scc: 43.63738 },
    { name: "2029", scc: 44.84571 },
    { name: "2030", scc: 46.07136 },
    { name: "2031", scc: 47.32361 },
    { name: "2032", scc: 48.604347 },
    { name: "2033", scc: 49.91117 },
    { name: "2034", scc: 51.24004 },
    { name: "2035", scc: 52.587868 },
    { name: "2036", scc: 53.95262 },
    { name: "2037", scc: 55.32713 },
    { name: "2038", scc: 56.696903 },
    { name: "2039", scc: 58.040375 },
    { name: "2040", scc: 59.326523 },
    { name: "2041", scc: 60.506012 },
    { name: "2042", scc: 61.578014 },
    { name: "2043", scc: 62.60495 },
    { name: "2044", scc: 63.617092 },
    { name: "2045", scc: 64.59847 },
    { name: "2046", scc: 65.54776 },
    { name: "2047", scc: 66.47052 },
    { name: "2048", scc: 67.374374 },
    { name: "2049", scc: 68.27504 },
    { name: "2050", scc: 69.19137 },
  ],
  "0.0375": [
    { name: "2023", scc: 33.419384 },
    { name: "2024", scc: 34.397556 },
    { name: "2025", scc: 35.402958 },
    { name: "2026", scc: 36.439598 },
    { name: "2027", scc: 37.509007 },
    { name: "2028", scc: 38.609737 },
    { name: "2029", scc: 39.738102 },
    { name: "2030", scc: 40.88429 },
    { name: "2031", scc: 42.05679 },
    { name: "2032", scc: 43.258026 },
    { name: "2033", scc: 44.485737 },
    { name: "2034", scc: 45.736076 },
    { name: "2035", scc: 47.006123 },
    { name: "2036", scc: 48.294025 },
    { name: "2037", scc: 49.592804 },
    { name: "2038", scc: 50.888153 },
    { name: "2039", scc: 52.15865 },
    { name: "2040", scc: 53.373344 },
    { name: "2041", scc: 54.48276 },
    { name: "2042", scc: 55.485603 },
    { name: "2043", scc: 56.44381 },
    { name: "2044", scc: 57.38764 },
    { name: "2045", scc: 58.301132 },
    { name: "2046", scc: 59.18287 },
    { name: "2047", scc: 60.03835 },
    { name: "2048", scc: 60.875076 },
    { name: "2049", scc: 61.708622 },
    { name: "2050", scc: 62.55777 },
  ],
  "0.0400": [
    { name: "2023", scc: 29.592094 },
    { name: "2024", scc: 30.499939 },
    { name: "2025", scc: 31.434736 },
    { name: "2026", scc: 32.400528 },
    { name: "2027", scc: 33.3989 },
    { name: "2028", scc: 34.42847 },
    { name: "2029", scc: 35.48565 },
    { name: "2030", scc: 36.561447 },
    { name: "2031", scc: 37.6629 },
    { name: "2032", scc: 38.79327 },
    { name: "2033", scc: 39.950447 },
    { name: "2034", scc: 41.130768 },
    { name: "2035", scc: 42.33147 },
    { name: "2036", scc: 43.550884 },
    { name: "2037", scc: 44.782215 },
    { name: "2038", scc: 46.01135 },
    { name: "2039", scc: 47.217014 },
    { name: "2040", scc: 48.368336 },
    { name: "2041", scc: 49.41571 },
    { name: "2042", scc: 50.357384 },
    { name: "2043", scc: 51.25483 },
    { name: "2044", scc: 52.138268 },
    { name: "2045", scc: 52.991745 },
    { name: "2046", scc: 53.813774 },
    { name: "2047", scc: 54.60976 },
    { name: "2048", scc: 55.387093 },
    { name: "2049", scc: 56.161213 },
    { name: "2050", scc: 56.950817 },
  ],
  "0.0425": [
    { name: "2023", scc: 26.391586 },
    { name: "2024", scc: 27.236723 },
    { name: "2025", scc: 28.108498 },
    { name: "2026", scc: 29.010983 },
    { name: "2027", scc: 29.945816 },
    { name: "2028", scc: 30.911695 },
    { name: "2029", scc: 31.905107 },
    { name: "2030", scc: 32.918068 },
    { name: "2031", scc: 33.955826 },
    { name: "2032", scc: 35.02264 },
    { name: "2033", scc: 36.116547 },
    { name: "2034", scc: 37.234043 },
    { name: "2035", scc: 38.372543 },
    { name: "2036", scc: 39.530537 },
    { name: "2037", scc: 40.701435 },
    { name: "2038", scc: 41.8713 },
    { name: "2039", scc: 43.019024 },
    { name: "2040", scc: 44.1138 },
    { name: "2041", scc: 45.10594 },
    { name: "2042", scc: 45.993217 },
    { name: "2043", scc: 46.83664 },
    { name: "2044", scc: 47.6664 },
    { name: "2045", scc: 48.466557 },
    { name: "2046", scc: 49.23553 },
    { name: "2047", scc: 49.978634 },
    { name: "2048", scc: 50.70315 },
    { name: "2049", scc: 51.42439 },
    { name: "2050", scc: 52.16096 },
  ],
  "0.0450": [
    { name: "2023", scc: 23.687922 },
    { name: "2024", scc: 24.476833 },
    { name: "2025", scc: 25.29204 },
    { name: "2026", scc: 26.137638 },
    { name: "2027", scc: 27.015326 },
    { name: "2028", scc: 27.92387 },
    { name: "2029", scc: 28.859846 },
    { name: "2030", scc: 29.81632 },
    { name: "2031", scc: 30.796642 },
    { name: "2032", scc: 31.806128 },
    { name: "2033", scc: 32.84294 },
    { name: "2034", scc: 33.90375 },
    { name: "2035", scc: 34.986126 },
    { name: "2036", scc: 36.088726 },
    { name: "2037", scc: 37.20515 },
    { name: "2038", scc: 38.321663 },
    { name: "2039", scc: 39.417305 },
    { name: "2040", scc: 40.46136 },
    { name: "2041", scc: 41.404053 },
    { name: "2042", scc: 42.2427 },
    { name: "2043", scc: 43.03784 },
    { name: "2044", scc: 43.819656 },
    { name: "2045", scc: 44.57219 },
    { name: "2046", scc: 45.293785 },
    { name: "2047", scc: 45.98966 },
    { name: "2048", scc: 46.66698 },
    { name: "2049", scc: 47.340935 },
    { name: "2050", scc: 48.030045 },
  ],
  "0.0475": [
    { name: "2023", scc: 21.38309 },
    { name: "2024", scc: 22.121336 },
    { name: "2025", scc: 22.885504 },
    { name: "2026", scc: 23.679726 },
    { name: "2027", scc: 24.505747 },
    { name: "2028", scc: 25.362413 },
    { name: "2029", scc: 26.24638 },
    { name: "2030", scc: 27.151756 },
    { name: "2031", scc: 28.080017 },
    { name: "2032", scc: 29.03751 },
    { name: "2033", scc: 30.022535 },
    { name: "2034", scc: 31.031914 },
    { name: "2035", scc: 32.063374 },
    { name: "2036", scc: 33.115738 },
    { name: "2037", scc: 34.182808 },
    { name: "2038", scc: 35.251026 },
    { name: "2039", scc: 36.299614 },
    { name: "2040", scc: 37.297928 },
    { name: "2041", scc: 38.196125 },
    { name: "2042", scc: 38.991077 },
    { name: "2043", scc: 39.742867 },
    { name: "2044", scc: 40.48164 },
    { name: "2045", scc: 41.19144 },
    { name: "2046", scc: 41.870533 },
    { name: "2047", scc: 42.524033 },
    { name: "2048", scc: 43.158993 },
    { name: "2049", scc: 43.790466 },
    { name: "2050", scc: 44.436916 },
  ],
  "0.0500": [
    { name: "2023", scc: 19.40208 },
    { name: "2024", scc: 20.094456 },
    { name: "2025", scc: 20.812363 },
    { name: "2026", scc: 21.559963 },
    { name: "2027", scc: 22.339056 },
    { name: "2028", scc: 23.148556 },
    { name: "2029", scc: 23.9852 },
    { name: "2030", scc: 24.844095 },
    { name: "2031", scc: 25.724936 },
    { name: "2032", scc: 26.635046 },
    { name: "2033", scc: 27.572857 },
    { name: "2034", scc: 28.535343 },
    { name: "2035", scc: 29.520382 },
    { name: "2036", scc: 30.526964 },
    { name: "2037", scc: 31.549082 },
    { name: "2038", scc: 32.57337 },
    { name: "2039", scc: 33.579227 },
    { name: "2040", scc: 34.53609 },
    { name: "2041", scc: 35.39407 },
    { name: "2042", scc: 36.14958 },
    { name: "2043", scc: 36.862255 },
    { name: "2044", scc: 37.562218 },
    { name: "2045", scc: 38.23351 },
    { name: "2046", scc: 38.8743 },
    { name: "2047", scc: 39.48961 },
    { name: "2048", scc: 40.086384 },
    { name: "2049", scc: 40.679546 },
    { name: "2050", scc: 41.287476 },
  ],
  "0.0525": [
    { name: "2023", scc: 17.68673 },
    { name: "2024", scc: 18.3374 },
    { name: "2025", scc: 19.013199 },
    { name: "2026", scc: 19.71831 },
    { name: "2027", scc: 20.45459 },
    { name: "2028", scc: 21.221022 },
    { name: "2029", scc: 22.014423 },
    { name: "2030", scc: 22.830818 },
    { name: "2031", scc: 23.668268 },
    { name: "2032", scc: 24.535004 },
    { name: "2033", scc: 25.429577 },
    { name: "2034", scc: 26.34911 },
    { name: "2035", scc: 27.291632 },
    { name: "2036", scc: 28.256292 },
    { name: "2037", scc: 29.23728 },
    { name: "2038", scc: 30.221428 },
    { name: "2039", scc: 31.1883 },
    { name: "2040", scc: 32.10743 },
    { name: "2041", scc: 32.92888 },
    { name: "2042", scc: 33.648636 },
    { name: "2043", scc: 34.325874 },
    { name: "2044", scc: 34.990692 },
    { name: "2045", scc: 35.627125 },
    { name: "2046", scc: 36.23326 },
    { name: "2047", scc: 36.814022 },
    { name: "2048", scc: 37.376236 },
    { name: "2049", scc: 37.934696 },
    { name: "2050", scc: 38.507717 },
  ],
  "0.0550": [
    { name: "2023", scc: 16.191383 },
    { name: "2024", scc: 16.803993 },
    { name: "2025", scc: 17.441309 },
    { name: "2026", scc: 18.107548 },
    { name: "2027", scc: 18.804615 },
    { name: "2028", scc: 19.53156 },
    { name: "2029", scc: 20.285286 },
    { name: "2030", scc: 21.062653 },
    { name: "2031", scc: 21.860239 },
    { name: "2032", scc: 22.6871 },
    { name: "2033", scc: 23.541906 },
    { name: "2034", scc: 24.421928 },
    { name: "2035", scc: 25.325338 },
    { name: "2036", scc: 26.25145 },
    { name: "2037", scc: 27.194641 },
    { name: "2038", scc: 28.141943 },
    { name: "2039", scc: 29.073095 },
    { name: "2040", scc: 29.95773 },
    { name: "2041", scc: 30.745874 },
    { name: "2042", scc: 31.433079 },
    { name: "2043", scc: 32.07808 },
    { name: "2044", scc: 32.71095 },
    { name: "2045", scc: 33.315712 },
    { name: "2046", scc: 33.890373 },
    { name: "2047", scc: 34.43976 },
    { name: "2048", scc: 34.97057 },
    { name: "2049", scc: 35.49749 },
    { name: "2050", scc: 36.038754 },
  ],
  "0.0575": [
    { name: "2023", scc: 14.879811 },
    { name: "2024", scc: 15.457559 },
    { name: "2025", scc: 16.059584 },
    { name: "2026", scc: 16.690128 },
    { name: "2027", scc: 17.351152 },
    { name: "2028", scc: 18.041769 },
    { name: "2029", scc: 18.758955 },
    { name: "2030", scc: 19.50033 },
    { name: "2031", scc: 20.261152 },
    { name: "2032", scc: 21.051214 },
    { name: "2033", scc: 21.869308 },
    { name: "2034", scc: 22.712847 },
    { name: "2035", scc: 23.580135 },
    { name: "2036", scc: 24.470654 },
    { name: "2037", scc: 25.378973 },
    { name: "2038", scc: 26.292318 },
    { name: "2039", scc: 27.19061 },
    { name: "2040", scc: 28.043581 },
    { name: "2041", scc: 28.801239 },
    { name: "2042", scc: 29.4587 },
    { name: "2043", scc: 30.074265 },
    { name: "2044", scc: 30.677977 },
    { name: "2045", scc: 31.25386 },
    { name: "2046", scc: 31.799833 },
    { name: "2047", scc: 32.320618 },
    { name: "2048", scc: 32.822807 },
    { name: "2049", scc: 33.320953 },
    { name: "2050", scc: 33.83323 },
  ],
};

export default {
  getPlotData(_discount: number) {
    const discount = _discount.toFixed(DECIMALS);
    return lookupData[discount];
    // const queryString = new URLSearchParams({ discount });
    // return await _fetchJson<ChartDataPoint[]>(
    //   `/api/calculator/plot?${queryString}`
    // );
  },
} as const;
