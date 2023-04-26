var disasters = [
    {
        "info": "2021-1-14 18:28:18 Location Name: INDONESIA:  SULAWESI:  MAMUJU, MAJENE",
        "lat": -2.976,
        "lon": 118.901,
        "dtype": "earthquake"
    },
    {
        "info": "2021-1-19 2:46:22 Location Name: ARGENTINA:  SAN JUAN PROVINCE",
        "lat": -31.83,
        "lon": -68.806,
        "dtype": "earthquake"
    },
    {
        "info": "2021-1-23 23:36:50 Location Name: SCOTIA SEA:  SOUTH SHETLAND ISLANDS",
        "lat": -61.825,
        "lon": -55.494,
        "dtype": "earthquake"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: NEW CALEDONIA:  LOYALTY ISLANDS",
        "lat": -23.054,
        "lon": 171.601,
        "dtype": "earthquake"
    },
    {
        "info": "2021-2-13 14:7:50 Location Name: JAPAN:  OFF FUKUSHIMA",
        "lat": 37.745,
        "lon": 141.749,
        "dtype": "earthquake"
    },
    {
        "info": "2021-3-3 10:16:10 Location Name: GREECE: TYRNAVOS, LARISA",
        "lat": 39.764,
        "lon": 22.176,
        "dtype": "earthquake"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: NEW ZEALAND:  GISBORNE",
        "lat": -37.563,
        "lon": 179.444,
        "dtype": "earthquake"
    },
    {
        "info": "2021-3-4 17:41:25 Location Name: KERMADEC ISLANDS:  S OF, RAOUL",
        "lat": -29.613,
        "lon": -177.843,
        "dtype": "earthquake"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: KERMADEC ISLANDS: SSE OF RAOUL ISLAND",
        "lat": -29.74,
        "lon": -177.267,
        "dtype": "earthquake"
    },
    {
        "info": "2021-3-18 0:4:6 Location Name: ALGERIA: BEJAIA",
        "lat": 36.915,
        "lon": 5.199,
        "dtype": "earthquake"
    },
    {
        "info": "2021-3-20 9:9:43 Location Name: JAPAN:  HONSHU ISLAND",
        "lat": 38.452,
        "lon": 141.648,
        "dtype": "earthquake"
    },
    {
        "info": "2021-4-10 7:0:17 Location Name: INDONESIA: JAVA: LUMAJANG, MALANG",
        "lat": -8.562,
        "lon": 112.519,
        "dtype": "earthquake"
    },
    {
        "info": "2021-4-28 2:21:26 Location Name: INDIA:  ASSAM",
        "lat": 26.782,
        "lon": 92.436,
        "dtype": "earthquake"
    },
    {
        "info": "2021-5-21 13:48:37 Location Name: CHINA: YUNNAN PROVINCE: YANGBI, YONGPING",
        "lat": 25.761,
        "lon": 100.011,
        "dtype": "earthquake"
    },
    {
        "info": "2021-5-21 18:4:13 Location Name: CHINA: QINGHAI PROVINCE",
        "lat": 34.598,
        "lon": 98.251,
        "dtype": "earthquake"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ALASKA PENINSULA",
        "lat": 55.325,
        "lon": -157.841,
        "dtype": "earthquake"
    },
    {
        "info": "2021-7-30 17:10:19 Location Name: PERU:  PIURA",
        "lat": -4.934,
        "lon": -80.602,
        "dtype": "earthquake"
    },
    {
        "info": "2021-8-11 17:46:14 Location Name: PHILIPPINES:  MINDANAO",
        "lat": 6.455,
        "lon": 126.742,
        "dtype": "earthquake"
    },
    {
        "info": "2021-8-12 18:32:54 Location Name: SOUTH SANDWICH ISLANDS",
        "lat": -57.596,
        "lon": -25.187,
        "dtype": "earthquake"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: SOUTH SANDWICH ISLANDS",
        "lat": -58.416,
        "lon": -25.321,
        "dtype": "earthquake"
    },
    {
        "info": "2021-8-14 12:29:8 Location Name: HAITI",
        "lat": 18.408,
        "lon": -73.475,
        "dtype": "earthquake"
    },
    {
        "info": "2021-9-8 1:47:47 Location Name: MEXICO:  GUERRERO",
        "lat": 16.982,
        "lon": -99.773,
        "dtype": "earthquake"
    },
    {
        "info": "2021-9-27 6:17:22 Location Name: GREECE:  CRETE",
        "lat": 35.252,
        "lon": 25.26,
        "dtype": "earthquake"
    },
    {
        "info": "2021-10-12 9:24:3 Location Name: GREECE: CRETE",
        "lat": 35.193,
        "lon": 26.256,
        "dtype": "earthquake"
    },
    {
        "info": "2021-11-14 12:8:38 Location Name: IRAN:  HORMOZGAN PROVINCE",
        "lat": 27.736,
        "lon": 56.077,
        "dtype": "earthquake"
    },
    {
        "info": "2021-11-28 10:52:13 Location Name: PERU:  AMAZONAS",
        "lat": -4.49,
        "lon": -76.846,
        "dtype": "earthquake"
    },
    {
        "info": "2021-12-14 3:20:24 Location Name: INDONESIA:  FLORES REGION",
        "lat": -7.603,
        "lon": 122.2,
        "dtype": "earthquake"
    },
    {
        "info": "2022-1-7 17:45:30 Location Name: CHINA: QINGHAI, GANSU",
        "lat": 37.815,
        "lon": 101.278,
        "dtype": "earthquake"
    },
    {
        "info": "2022-1-14 9:5:42 Location Name: INDONESIA: PANDEGLANG, BANTEN",
        "lat": -6.929,
        "lon": 105.251,
        "dtype": "earthquake"
    },
    {
        "info": "2022-1-29 2:46:39 Location Name: NEW ZEALAND: KERMADEC ISLANDS",
        "lat": -29.531,
        "lon": -176.749,
        "dtype": "earthquake"
    },
    {
        "info": "2022-2-16 7:12:25 Location Name: GUATEMALA: BAJA VERAPAZ, GUATEMALA, QUEZALTENANGO",
        "lat": 14.193,
        "lon": -91.297,
        "dtype": "earthquake"
    },
    {
        "info": "2022-2-25 1:39:27 Location Name: INDONESIA: W SUMATRA: PASAMAN, WEST PASAMAN",
        "lat": 0.233,
        "lon": 100.106,
        "dtype": "earthquake"
    },
    {
        "info": "2022-3-16 14:36:33 Location Name: JAPAN:  OFF FUKUSHIMA",
        "lat": 37.702,
        "lon": 141.587,
        "dtype": "earthquake"
    },
    {
        "info": "2022-3-22 17:41:38 Location Name: TAIWAN: HUALIEN, T'AIT-TUNG",
        "lat": 23.412,
        "lon": 121.562,
        "dtype": "earthquake"
    },
    {
        "info": "2022-3-30 20:56:58 Location Name: NEW CALEDONIA:  LOYALTY ISLANDS",
        "lat": -22.716,
        "lon": 170.286,
        "dtype": "earthquake"
    },
    {
        "info": "2022-3-31 5:44:1 Location Name: NEW CALEDONIA:  LOYALTY ISLANDS",
        "lat": -22.579,
        "lon": 170.354,
        "dtype": "earthquake"
    },
    {
        "info": "2022-5-26 12:2:20 Location Name: PERU: PUNO",
        "lat": -14.863,
        "lon": -70.308,
        "dtype": "earthquake"
    },
    {
        "info": "2022-7-1 21:32:8 Location Name: IRAN:  HORMOZGAN PROVINCE",
        "lat": 26.935,
        "lon": 55.254,
        "dtype": "earthquake"
    },
    {
        "info": "2022-7-27 0:43:24 Location Name: PHILIPPINES: LUZON: ABRA",
        "lat": 17.56,
        "lon": 120.801,
        "dtype": "earthquake"
    },
    {
        "info": "2022-9-5 4:52:19 Location Name: CHINA:  SICHUAN PROVINCE",
        "lat": 29.726,
        "lon": 102.279,
        "dtype": "earthquake"
    },
    {
        "info": "2022-9-10 23:46:57 Location Name: PAPUA NEW GUINEA: MOROBE, EASTERN HIGHLANDS",
        "lat": -6.256,
        "lon": 146.469,
        "dtype": "earthquake"
    },
    {
        "info": "2022-9-18 6:44:14 Location Name: TAIWAN:  HUALIEN",
        "lat": 23.159,
        "lon": 121.316,
        "dtype": "earthquake"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: MEXICO:  MICHOACAN, COLIMA, JALISCO",
        "lat": 18.367,
        "lon": -103.252,
        "dtype": "earthquake"
    },
    {
        "info": "2022-9-22 6:16:9 Location Name: MEXICO: MEXICO CITY, MICHOACAN",
        "lat": 18.308,
        "lon": -102.923,
        "dtype": "earthquake"
    },
    {
        "info": "2022-10-25 14:59:3 Location Name: PHILIPPINES: LUZON: ABRA",
        "lat": 17.662,
        "lon": 120.823,
        "dtype": "earthquake"
    },
    {
        "info": "2022-11-11 10:48:45 Location Name: TONGA ISLANDS",
        "lat": -19.318,
        "lon": -172.1,
        "dtype": "earthquake"
    },
    {
        "info": "2021-1-23 23:36:50 Location Name: ",
        "lat": -62.4793,
        "lon": -59.6629,
        "dtype": "tsunami"
    },
    {
        "info": "2021-1-23 23:36:50 Location Name: ",
        "lat": -63.320833,
        "lon": -57.898611,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -36.189,
        "lon": 175.489,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -21.9829,
        "lon": 166.6833,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -18.1342,
        "lon": 178.4236,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -34.4738,
        "lon": 150.9119,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -31.518,
        "lon": 159.065,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -19.53256,
        "lon": 169.26595,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -29.05833,
        "lon": 167.95361,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -20.919,
        "lon": 167.279,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -37.07366,
        "lon": 149.90774,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -38.2001,
        "lon": -179.7978,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -8.502,
        "lon": 179.195,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -37.55,
        "lon": 178.159,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -14.29602,
        "lon": -178.160225,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -21.548,
        "lon": 167.877,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -38.6754,
        "lon": 178.023,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -13.8268,
        "lon": -171.7613,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -34.4148,
        "lon": 173.0487,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -17.7553,
        "lon": 168.3077,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -35.17,
        "lon": 173.16,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -27.9,
        "lon": 153.43,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-13 14:7:50 Location Name: ",
        "lat": 38.60287392,
        "lon": 141.50377626,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-13 14:7:50 Location Name: ",
        "lat": 38.267,
        "lon": 141.033,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-13 14:7:50 Location Name: ",
        "lat": 37.833,
        "lon": 140.967,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-13 14:7:50 Location Name: ",
        "lat": 38.417,
        "lon": 141.267,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: ",
        "lat": -42.3707,
        "lon": 176.9109,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: ",
        "lat": -40.6003,
        "lon": 179.0996,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: ",
        "lat": -29.28,
        "lon": -177.8944,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: ",
        "lat": -37.64109,
        "lon": 176.18118,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: ",
        "lat": -36.0493,
        "lon": -177.708,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: ",
        "lat": -29.251,
        "lon": -177.9038,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: ",
        "lat": -37.5503,
        "lon": 178.159,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: ",
        "lat": -38.2001,
        "lon": -179.7978,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: ",
        "lat": -36.189,
        "lon": 175.489,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 17:41:25 Location Name: ",
        "lat": -36.189,
        "lon": 175.489,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 17:41:25 Location Name: ",
        "lat": -37.5503,
        "lon": 178.159,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 17:41:25 Location Name: ",
        "lat": -8.9148,
        "lon": -140.0958,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 17:41:25 Location Name: ",
        "lat": -0.7533,
        "lon": -90.3117,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 17:41:25 Location Name: ",
        "lat": -34.4148,
        "lon": 173.0487,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 17:41:25 Location Name: ",
        "lat": -29.251,
        "lon": -177.903,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 17:41:25 Location Name: ",
        "lat": -29.05833,
        "lon": 167.95361,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 17:41:25 Location Name: ",
        "lat": -29.28,
        "lon": -177.8944,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -0.433,
        "lon": -90.283,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 21.9544,
        "lon": -159.3561,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -35.76,
        "lon": 174.35,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -34.4148,
        "lon": 173.0487,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -21.9829,
        "lon": 166.6833,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -27.15,
        "lon": -109.45,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 19.05,
        "lon": -104.333,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -18.1342,
        "lon": 178.4236,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -36.6425,
        "lon": -73.0635,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 24.162,
        "lon": -110.345,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -8.9148,
        "lon": -140.0958,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -38.7423,
        "lon": -73.431,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -39.8783,
        "lon": -73.4228,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 16.1684,
        "lon": -95.1968,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -19.53256,
        "lon": 169.26595,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 21.3067,
        "lon": -157.867,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -22.302,
        "lon": 166.44,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -29.058,
        "lon": 167.955,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 21.3194,
        "lon": -157.669,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -23.3516,
        "lon": -173.4015,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -20.2,
        "lon": 169.82,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -22.655,
        "lon": 167.444,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 20.895,
        "lon": -156.477,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -40.5808,
        "lon": -73.7372,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 16.83793,
        "lon": -99.903,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 40.2,
        "lon": 141.817,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -23.1221,
        "lon": -134.9666,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -26.3567,
        "lon": -70.6461,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -36.189,
        "lon": 175.489,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -37.55,
        "lon": 178.159,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -20.8003,
        "lon": -70.1942,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -15.5156,
        "lon": 167.1886,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 20.0366,
        "lon": -155.829,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -31.518,
        "lon": 159.065,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -21.548,
        "lon": 167.877,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -16.72216,
        "lon": -151.0324,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -36.53797,
        "lon": -72.957142,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 5.556083,
        "lon": -87.04783,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -20.20457778,
        "lon": -70.14783056,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -16.8921,
        "lon": -171.1904,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -42.3707,
        "lon": 176.9109,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -21.2,
        "lon": -159.783,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -23.1178,
        "lon": -134.9689,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -33.02767,
        "lon": -71.62787,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 21.3218,
        "lon": -158.1193,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 21.593,
        "lon": -158.1055,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 20.65793,
        "lon": -105.24287,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -20.6929,
        "lon": 164.9422,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -34.4738,
        "lon": 150.9119,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -33.58163,
        "lon": -71.61819,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -29.95,
        "lon": -71.3353,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 17.94,
        "lon": -102.17833,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 19.7303,
        "lon": -155.0553,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 15.77,
        "lon": -96.1,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -23.0975,
        "lon": -70.4508,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -23.3418,
        "lon": -149.4756,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -32.7819,
        "lon": -71.527,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -30.29216,
        "lon": -71.6079,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -36.0493,
        "lon": -177.708,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -40.6003,
        "lon": 179.0996,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -37.59409,
        "lon": -73.66412,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 27.0939,
        "lon": 142.1947,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -27.0644,
        "lon": -70.8247,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -36.6953,
        "lon": -73.1063,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -21.138,
        "lon": -175.1815,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -17.6049,
        "lon": 177.4383,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -43.733,
        "lon": -176.268,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -38.2001,
        "lon": -179.7978,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -17.7553,
        "lon": 168.3077,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -17.5331,
        "lon": -149.5726,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -21.55,
        "lon": 167.88,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -39.383,
        "lon": -73.233,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -0.7533,
        "lon": -90.3117,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -29.24611,
        "lon": -71.4686,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 41.7456,
        "lon": -124.184,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 9.4246,
        "lon": -84.1711,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -2.2177,
        "lon": -80.9064,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -38.13,
        "lon": 178.32,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -13.8268,
        "lon": -171.7613,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -28.175,
        "lon": 153.55,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -9.8049,
        "lon": -139.0347,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -29.05833,
        "lon": 167.95361,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 35.17666,
        "lon": -120.755,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 5.544488,
        "lon": -87.0577,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-18 0:4:6 Location Name: ",
        "lat": 37.28576,
        "lon": 13.52684,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-18 0:4:6 Location Name: ",
        "lat": 38.927535,
        "lon": 8.719503,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-18 0:4:6 Location Name: ",
        "lat": 39.89304,
        "lon": 4.27056,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-18 0:4:6 Location Name: ",
        "lat": 39.55,
        "lon": 2.633,
        "dtype": "tsunami"
    },
    {
        "info": "2021-6-16 4:43:7 Location Name: ",
        "lat": -4.525,
        "lon": 129.897,
        "dtype": "tsunami"
    },
    {
        "info": "2021-6-16 4:43:7 Location Name: ",
        "lat": -3.33842,
        "lon": 128.921,
        "dtype": "tsunami"
    },
    {
        "info": "2021-6-16 4:43:7 Location Name: ",
        "lat": -3.37652778,
        "lon": 129.5416333,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 59.55,
        "lon": -139.733,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 36.605,
        "lon": -121.888,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 55.3,
        "lon": -148.5,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 42.737,
        "lon": -124.497,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 53.883,
        "lon": -166.533,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 55.062,
        "lon": -162.31,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 55.46,
        "lon": -133.13,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 58.2,
        "lon": -136.36,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 37.77166,
        "lon": -122.29833,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 33.719,
        "lon": -118.272,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 43.352,
        "lon": -124.192,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 52.9406,
        "lon": -168.871,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 37.997,
        "lon": -122.975,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 53.726,
        "lon": -152.483,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 19.7303,
        "lon": -155.0553,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 44.625,
        "lon": -124.043,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 41.7456,
        "lon": -124.184,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 35.17666,
        "lon": -120.755,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 51.863,
        "lon": -176.632,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 57.201,
        "lon": -153.305,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 47.909,
        "lon": -124.637,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 48.367,
        "lon": -124.612,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 55.337,
        "lon": -160.502,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 32.715,
        "lon": -117.174,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 37.807,
        "lon": -122.465,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 20.895,
        "lon": -156.477,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 60.119,
        "lon": -149.427,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 57.052,
        "lon": -135.342,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 60.48,
        "lon": -145.87,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 48.125,
        "lon": -123.44,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 49.153,
        "lon": -125.913,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 61.125,
        "lon": -146.362,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 51.068,
        "lon": -164.02,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 40.767,
        "lon": -124.217,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 57.73031,
        "lon": -152.51387,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 55.354,
        "lon": -160.504,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 56.24661,
        "lon": -134.64769,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 59.47,
        "lon": -151.68,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 58.3,
        "lon": -134.42,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 56.85,
        "lon": -154.3,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-11 17:46:14 Location Name: ",
        "lat": 1.438944,
        "lon": 125.190431,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-11 17:46:14 Location Name: ",
        "lat": 7.1537,
        "lon": 125.6629,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 19.671,
        "lon": -156.028,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -31.82,
        "lon": 115.73,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -69.007778,
        "lon": 39.570278,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 36.605,
        "lon": -121.888,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 19.0845,
        "lon": -155.5509,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -28.217,
        "lon": -48.65,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -33.96666,
        "lon": 25.63333,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 28.6778,
        "lon": -17.76795,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 21.3067,
        "lon": -157.867,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -23.1178,
        "lon": -134.9689,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -63.32083,
        "lon": -57.89861,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 41.7456,
        "lon": -124.184,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 19.7303,
        "lon": -155.0553,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -54.805,
        "lon": -68.295,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -34.17861,
        "lon": 22.13528,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 37.735,
        "lon": -25.672,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -62.4793,
        "lon": -59.6629,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -34.2,
        "lon": 18.433,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -54.93278,
        "lon": -67.60833,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 16.755,
        "lon": -22.9833,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -12.117,
        "lon": 96.883,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -20.1573,
        "lon": 57.5041,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -18.1536,
        "lon": 49.4281,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 20.895,
        "lon": -156.477,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -49.35,
        "lon": 70.22,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -9.8049,
        "lon": -139.0347,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 55.062,
        "lon": -162.31,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 34.252,
        "lon": -119.267,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -15.917918,
        "lon": -5.714394,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -8.9148,
        "lon": -140.0958,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 5.635343,
        "lon": 0.011775,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 52.9406,
        "lon": -168.871,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 57.052,
        "lon": -135.342,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 55.337,
        "lon": -160.502,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -46.875,
        "lon": 37.86,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 20.0366,
        "lon": -155.829,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -19.68024,
        "lon": 63.42119,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -28.8,
        "lon": 32.083,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 4.882123,
        "lon": -1.744972,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -33.87089,
        "lon": 121.89536,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -54.28,
        "lon": -36.5,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 35.17666,
        "lon": -120.755,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 37.807,
        "lon": -122.465,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 59.55,
        "lon": -139.733,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 57.73031,
        "lon": -152.51387,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -20.935,
        "lon": 55.2847,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 21.593,
        "lon": -158.1055,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -33.91,
        "lon": 18.43,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 28.08777,
        "lon": -17.10831,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -51.75,
        "lon": -57.933,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 21.9544,
        "lon": -159.3561,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 33.719,
        "lon": -118.272,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-14 12:29:8 Location Name: ",
        "lat": 18.534471,
        "lon": -72.380044,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-14 12:29:8 Location Name: ",
        "lat": 20.8681,
        "lon": -86.8668,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-14 12:29:8 Location Name: ",
        "lat": 21.21666,
        "lon": -86.71667,
        "dtype": "tsunami"
    },
    {
        "info": "2021-9-8 1:47:47 Location Name: ",
        "lat": 16.83793,
        "lon": -99.903,
        "dtype": "tsunami"
    },
    {
        "info": "2021-12-14 3:20:24 Location Name: ",
        "lat": -8.285,
        "lon": 120.45,
        "dtype": "tsunami"
    },
    {
        "info": "2021-12-14 3:20:24 Location Name: ",
        "lat": -8.51,
        "lon": 121.33,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-13 :: Location Name: 7554",
        "lat": -21.138,
        "lon": -175.1815,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 52.98,
        "lon": -139.95,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.72,
        "lon": -76.67,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -40.5808,
        "lon": -73.7372,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 57.125,
        "lon": -170.275,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.593,
        "lon": -158.1055,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -34.4738,
        "lon": 150.9119,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -41.2846,
        "lon": 174.7791,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -23.3516,
        "lon": -173.4015,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 28.373376,
        "lon": -16.752875,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 15.5768,
        "lon": -61.4582,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 14.5822,
        "lon": 120.9716,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -16.6269,
        "lon": -143.5691,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -9.429,
        "lon": 159.955,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -31.517,
        "lon": 159.067,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.355,
        "lon": -74.4183,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.1616667,
        "lon": -90.0483333,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -23.65,
        "lon": -70.404,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -36.53797,
        "lon": -72.95714,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -37.029,
        "lon": -73.1518,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 4.9542,
        "lon": -90.8658,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 16.1684,
        "lon": -95.1968,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 10.1387333,
        "lon": -61.00195,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.29,
        "lon": 166.6183,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -39.8783,
        "lon": -73.4228,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 5.55608,
        "lon": -87.04783,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.22,
        "lon": -70.15,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.221254,
        "lon": -178.96381,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.249038,
        "lon": -178.978787,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.66439,
        "lon": -178.745708,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.6929,
        "lon": 164.9422,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.12,
        "lon": 178.53,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.17666,
        "lon": -120.755,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.71,
        "lon": -9.13,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 53.25,
        "lon": -132.08,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 20.65793,
        "lon": -105.24287,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -30.29216,
        "lon": -71.6079,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -6.6928,
        "lon": 156.4086,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 22.220278,
        "lon": 113.894444,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.807,
        "lon": -122.465,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 47.868,
        "lon": -3.913,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 51.068,
        "lon": -164.02,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 10.589007,
        "lon": -85.652691,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.793057,
        "lon": -85.280837,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.88876343,
        "lon": 28.02371979,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -12.96733,
        "lon": -38.51666,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 60.119,
        "lon": -149.427,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -13.8268,
        "lon": -171.7613,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 32.017,
        "lon": 130.2,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 26.217,
        "lon": 127.667,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.683,
        "lon": 135.35,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 30.733,
        "lon": 131.0,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.133,
        "lon": 139.8,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.05,
        "lon": 139.55,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.75,
        "lon": 140.867,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 26.26,
        "lon": 127.8,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 30.672,
        "lon": -81.465,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 42.664,
        "lon": -128.807,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.553,
        "lon": -156.546,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96362639,
        "lon": -122.00124122,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96656385,
        "lon": -122.00395576,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.97030626,
        "lon": -122.00005053,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.9740334,
        "lon": -121.9988935,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 17.697,
        "lon": -64.753,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 14.601667,
        "lon": -61.063333,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.3,
        "lon": 141.5,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.017,
        "lon": 138.883,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.017,
        "lon": 138.517,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -49.35,
        "lon": 70.22,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 56.85,
        "lon": -154.3,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 48.837,
        "lon": -125.137,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.88138,
        "lon": -85.523863,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 14.676,
        "lon": -17.42,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 51.6496,
        "lon": -9.9034,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.1536,
        "lon": 49.4281,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.9189,
        "lon": 139.825,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -36.189,
        "lon": 175.489,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -8.9148,
        "lon": -140.0958,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.267,
        "lon": 141.033,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.417,
        "lon": 141.267,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.217,
        "lon": 135.15,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 40.67664167,
        "lon": 14.75083889,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 55.422778,
        "lon": 13.825556,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 4.052,
        "lon": 146.592,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.3199,
        "lon": -157.6688,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -40.6003,
        "lon": 179.0996,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 44.4011,
        "lon": 155.6534,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.8,
        "lon": -121.78,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -39.88,
        "lon": -73.35,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 46.208,
        "lon": -123.767,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.27,
        "lon": -119.28,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.0009,
        "lon": -72.1088,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 50.513,
        "lon": -128.028,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -14.2766,
        "lon": -170.689,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -19.5969,
        "lon": -70.2138,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.05,
        "lon": -104.333,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.671,
        "lon": -156.028,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -29.6823,
        "lon": -175.0124,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 4.88212,
        "lon": -1.74497,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -37.55,
        "lon": 178.159,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 54.32,
        "lon": -130.33,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 52.6633,
        "lon": -156.7783,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.178107,
        "lon": -178.810463,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.54982,
        "lon": 166.56187,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -39.4757,
        "lon": 176.9201,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -36.0493,
        "lon": -177.708,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 16.755,
        "lon": -22.9833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.7303,
        "lon": -155.0553,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 15.2266,
        "lon": 145.742,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.3067,
        "lon": -157.867,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.21666,
        "lon": -86.71667,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -29.24611,
        "lon": -71.4686,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 14.71166,
        "lon": -92.40166,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 13.15,
        "lon": 123.75,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.43,
        "lon": 22.42,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.1436,
        "lon": 8.3081,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -54.93278,
        "lon": -67.60833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -2.282,
        "lon": 40.909,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 48.547,
        "lon": -123.007,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -36.1,
        "lon": 178.6,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -7.4262,
        "lon": -93.4812,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -13.73,
        "lon": -76.22,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -12.367,
        "lon": -76.8,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -36.733,
        "lon": -72.983,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 13.433,
        "lon": 144.65,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.7187,
        "lon": 140.7247,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.69316,
        "lon": -9.41538,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 31.583,
        "lon": 130.567,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.083,
        "lon": 136.2,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.53,
        "lon": -28.63,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96485716,
        "lon": -122.00119778,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.95368769,
        "lon": -121.8842586,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96220346,
        "lon": -122.0043663,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96166864,
        "lon": -122.0031556,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.5,
        "lon": 15.1,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 40.933,
        "lon": 141.4,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.85,
        "lon": 135.167,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -2.2177,
        "lon": -80.9064,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 59.55,
        "lon": -139.733,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 48.55,
        "lon": -124.4167,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 53.31,
        "lon": -4.62,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.883,
        "lon": 136.95,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 57.275,
        "lon": 16.478056,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.26,
        "lon": -70.13,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 14.697,
        "lon": -92.411,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 53.883,
        "lon": -166.533,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 55.062,
        "lon": -162.31,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 49.23,
        "lon": -124.82,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -11.92,
        "lon": -77.14,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -9.8049,
        "lon": -139.0347,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 52.2316,
        "lon": -174.172,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -44.0248,
        "lon": -176.369,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -54.28,
        "lon": -36.5,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -15.5156,
        "lon": 167.1886,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 15.77,
        "lon": -96.1,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -34.4148,
        "lon": 173.0487,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 32.715,
        "lon": -117.174,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 30.403,
        "lon": -87.212,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.1733,
        "lon": -73.1816,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 43.6567,
        "lon": -70.24669,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.4683,
        "lon": -120.673,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.17666,
        "lon": -120.755,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.213361,
        "lon": -178.932424,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -19.822362,
        "lon": -178.251526,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.241818,
        "lon": -178.937331,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -32.1333,
        "lon": -71.5333,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 1.984,
        "lon": -157.473,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 57.391944,
        "lon": 11.919167,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 44.625,
        "lon": -124.043,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -63.32083,
        "lon": -57.89861,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.1342,
        "lon": 178.4236,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 57.052,
        "lon": -135.342,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.997,
        "lon": -122.975,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -25.00898,
        "lon": -70.46873,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -43.4333,
        "lon": 146.9748,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 40.47560278,
        "lon": 17.22376389,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.541111,
        "lon": 95.66778,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -62.4793,
        "lon": -59.6629,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.96,
        "lon": 76.26,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 28.8891,
        "lon": 135.0194,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.919,
        "lon": 167.279,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 16.83793,
        "lon": -99.903,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 8.733,
        "lon": 167.733,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.77166,
        "lon": -122.29833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -43.57,
        "lon": 172.773,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -13.715,
        "lon": -76.22,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.935276,
        "lon": -85.664588,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.691511,
        "lon": -85.006293,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -23.1178,
        "lon": -134.9689,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 42.633,
        "lon": 141.617,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.783,
        "lon": 139.383,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 26.145,
        "lon": 127.767,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.3483,
        "lon": -9.3733,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.83798981,
        "lon": 28.38484573,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 29.2633,
        "lon": -89.9567,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 29.03,
        "lon": 121.62,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96518189,
        "lon": -122.00129378,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96856814,
        "lon": -122.00152813,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -65.25,
        "lon": -64.2667,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.93466435,
        "lon": -121.8647121,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.95379604,
        "lon": -121.8840975,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 20.895,
        "lon": -156.477,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.267,
        "lon": 141.883,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.617,
        "lon": 138.85,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 31.4667,
        "lon": 131.105,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 31.017,
        "lon": 130.683,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 40.533,
        "lon": 141.533,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -19.277,
        "lon": 147.058,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -9.008,
        "lon": -158.037,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 31.583,
        "lon": 131.417,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 25.833,
        "lon": 131.233,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 40.767,
        "lon": -124.217,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.748778,
        "lon": -84.992915,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 5.557951,
        "lon": -87.048277,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -43.8983,
        "lon": -73.7483,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.4686,
        "lon": -73.4328,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -15.02285,
        "lon": 117.94233,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 1.367,
        "lon": 172.933,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 5.89,
        "lon": -162.09,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 49.626,
        "lon": -169.871,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 49.901,
        "lon": -134.395,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 51.863,
        "lon": -176.632,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 46.908,
        "lon": -124.11,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -26.3567,
        "lon": -70.6461,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -27.0644,
        "lon": -70.8247,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.9667,
        "lon": -7.8667,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.0,
        "lon": 25.74,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 58.768889,
        "lon": 17.858889,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 51.21,
        "lon": -4.11,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 17.94,
        "lon": -102.17833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -33.58163,
        "lon": -71.61819,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -34.6873055,
        "lon": -72.05786,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -42.48056,
        "lon": -73.75833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -27.9,
        "lon": 153.43,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 6.9806,
        "lon": 158.2001,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 42.64,
        "lon": 8.94,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.8,
        "lon": -70.683,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -9.5092,
        "lon": -176.2586,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -26.283,
        "lon": -80.117,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -13.170479,
        "lon": -176.100665,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.663561,
        "lon": -178.720505,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.636615,
        "lon": -178.722924,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.559748,
        "lon": 179.93774,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 49.153,
        "lon": -125.913,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -23.3418,
        "lon": -149.4756,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 28.215,
        "lon": -177.361,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.8003,
        "lon": -70.1942,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -2.04,
        "lon": 147.4,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 47.909,
        "lon": -124.637,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 22.27,
        "lon": 113.54,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 13.5739,
        "lon": -89.8383,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -16.8,
        "lon": -179.95,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -16.6,
        "lon": 179.0,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.87141,
        "lon": -85.49256,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 3.9725,
        "lon": -77.3275,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.4246,
        "lon": -84.1711,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 10.926265,
        "lon": -85.717401,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 45.41,
        "lon": 141.69,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 42.9756,
        "lon": 144.3714,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 48.367,
        "lon": -124.612,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.0189,
        "lon": -122.13323,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.93462086,
        "lon": -121.8646772,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 29.85,
        "lon": 129.85,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.55,
        "lon": 135.9,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 24.553,
        "lon": -81.808,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 13.392,
        "lon": -87.8,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96710625,
        "lon": -122.00389826,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.95387666,
        "lon": -121.8841802,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96188998,
        "lon": -122.0037782,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 28.383,
        "lon": 129.5,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.66,
        "lon": 137.27,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 24.8,
        "lon": 125.283,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 49.917861,
        "lon": -6.317222,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -29.05833,
        "lon": 167.95361,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -25.4081,
        "lon": -70.4917,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.698,
        "lon": -8.838,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.08,
        "lon": 17.14,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 56.154167,
        "lon": 14.821389,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -26.6672,
        "lon": 163.9549,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -24.3093,
        "lon": 169.4988,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -23.0975,
        "lon": -70.4508,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 55.3092,
        "lon": -148.5407,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.192061,
        "lon": -96.123553,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 20.864506,
        "lon": -90.405121,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.4758,
        "lon": -70.3232,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -29.95,
        "lon": -71.3353,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.7553,
        "lon": 168.3077,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 10.444974,
        "lon": -85.774151,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -42.5465,
        "lon": 147.9307,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 64.17,
        "lon": -51.73,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 64.915833,
        "lon": 21.230556,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 13.129912,
        "lon": -61.1955,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.811985,
        "lon": -90.594916,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.333,
        "lon": -127.082,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -4.583,
        "lon": -81.283,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -0.5319,
        "lon": 166.9092,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.914,
        "lon": -123.711,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 45.23,
        "lon": 147.88,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 50.678857,
        "lon": 156.135304,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.252,
        "lon": -119.267,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 20.96355,
        "lon": -97.3286,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.310499,
        "lon": -178.990843,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.670627,
        "lon": -178.506758,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -0.7533,
        "lon": -90.3117,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.3218,
        "lon": -158.1193,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -14.715,
        "lon": 153.537,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 42.737,
        "lon": -124.497,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 58.2,
        "lon": -136.36,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 5.544488,
        "lon": -87.0577,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -21.138,
        "lon": -175.1815,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -21.25,
        "lon": -159.75,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 29.212,
        "lon": 121.945,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 5.635343,
        "lon": 0.011775,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 32.7792,
        "lon": 132.9589,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.40829,
        "lon": -119.68499,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.935,
        "lon": 55.2847,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.149609,
        "lon": -83.758848,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 56.649722,
        "lon": 12.8425,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 18.4805,
        "lon": -66.7024,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 10.300407,
        "lon": -85.841638,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 32.641,
        "lon": -16.918,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.286,
        "lon": 155.766,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.298,
        "lon": -70.659,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.133,
        "lon": 139.617,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 42.167,
        "lon": 142.767,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.1,
        "lon": 139.767,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 40.642,
        "lon": -8.748,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 51.707,
        "lon": -5.052,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -46.922,
        "lon": 160.562,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -0.433,
        "lon": -90.283,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 28.02169,
        "lon": -97.04669,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 13.1529,
        "lon": -87.4202,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96686674,
        "lon": -122.00387842,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.97355426,
        "lon": -121.99881155,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.95368333,
        "lon": -121.8841819,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 31.9,
        "lon": 131.45,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.867,
        "lon": 138.333,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.933,
        "lon": 143.25,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 43.083,
        "lon": 145.133,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.833,
        "lon": 140.967,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 48.1216,
        "lon": 163.4209,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.92833,
        "lon": -122.4,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -33.87089,
        "lon": 121.89536,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -21.9829,
        "lon": 166.6833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 43.352,
        "lon": -124.192,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -23.161,
        "lon": 150.79,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -42.8923,
        "lon": 147.338,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -37.07366,
        "lon": 149.90774,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.914,
        "lon": -123.711,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 16.7363,
        "lon": -169.5283,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 31.8484,
        "lon": -116.6181,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 50.722,
        "lon": -127.488,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 47.57,
        "lon": -52.72,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -11.75,
        "lon": -77.133,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 58.46,
        "lon": -5.05,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.0009,
        "lon": -72.1088,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 15.755,
        "lon": -96.13,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 12.881,
        "lon": 132.333,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 16.224398,
        "lon": -61.531452,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -41.0501,
        "lon": 145.915,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 20.0366,
        "lon": -155.829,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.178495,
        "lon": -178.791847,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.240369,
        "lon": -178.78365,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.620527,
        "lon": 179.892953,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.5331,
        "lon": -149.5726,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.953,
        "lon": -8.887,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -6.74,
        "lon": -80.0,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -35.61,
        "lon": 174.528,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 42.3559,
        "lon": 14.41486111,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 52.9406,
        "lon": -168.871,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 46.705,
        "lon": -123.966,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 48.125,
        "lon": -123.44,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 23.42,
        "lon": 117.02,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -46.0858,
        "lon": 166.5894,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -38.3434,
        "lon": 141.6132,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.133,
        "lon": 152.145,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.15,
        "lon": -119.18,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 16.941,
        "lon": 54.008,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -43.9733,
        "lon": 168.6161,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 51.833,
        "lon": 158.067,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.883005,
        "lon": -85.577134,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 10.474772,
        "lon": -85.780027,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 10.435249,
        "lon": -85.792452,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -5.3737,
        "lon": 164.991,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 11.575,
        "lon": 154.588,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -14.0461,
        "lon": 110.0275,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -13.84,
        "lon": -76.25,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -33.63602,
        "lon": -78.82988,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.45,
        "lon": -158.197,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.6,
        "lon": -155.95,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.017,
        "lon": 141.75,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 25.90028,
        "lon": -89.2869,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.93458868,
        "lon": -121.8646587,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.083,
        "lon": 136.883,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.217,
        "lon": 139.133,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.067,
        "lon": 139.483,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.267,
        "lon": 134.167,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.333,
        "lon": 133.25,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.367,
        "lon": 141.233,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.667,
        "lon": 138.95,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 1.833,
        "lon": -78.733,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.735,
        "lon": -25.672,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 23.867,
        "lon": -166.283,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 18.22,
        "lon": -67.16,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 18.0899,
        "lon": -67.9385,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.97265661,
        "lon": -122.00046472,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.333,
        "lon": 140.583,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 40.2,
        "lon": 141.817,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 43.2781,
        "lon": 145.5678,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.017,
        "lon": 134.583,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.8,
        "lon": -149.2833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -24.22,
        "lon": 113.3975,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 18.333,
        "lon": -64.917,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 27.0939,
        "lon": 142.1947,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.6083,
        "lon": 138.2222,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.604613,
        "lon": -85.084787,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 20.7986,
        "lon": 65.3466,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 14.6768944,
        "lon": -60.9379306,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 50.153,
        "lon": 171.897,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 32.867,
        "lon": -117.257,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -12.39,
        "lon": -76.78,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -16.72216,
        "lon": -151.0324,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -26.7502,
        "lon": -73.9905,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.945,
        "lon": -25.1483,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 43.48,
        "lon": 6.93,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -22.2466,
        "lon": 166.4116,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 45.857,
        "lon": -128.736,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 18.3008,
        "lon": -65.3028,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -28.467,
        "lon": -71.22,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -35.3558,
        "lon": -72.4578,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.76,
        "lon": -122.51,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 58.3,
        "lon": -134.42,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 20.742,
        "lon": -156.888,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -8.502,
        "lon": 179.195,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 18.2967667,
        "lon": -93.85455,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -36.6953,
        "lon": -73.1063,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.84,
        "lon": 9.37,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.627703,
        "lon": 179.871646,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.668037,
        "lon": -178.49875,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.664697,
        "lon": -178.721033,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -32.7819,
        "lon": -71.527,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.9544,
        "lon": -159.3561,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.3194,
        "lon": -157.669,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 7.1537,
        "lon": 125.6629,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 55.337,
        "lon": -160.502,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -38.6754,
        "lon": 178.023,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -27.15,
        "lon": -109.45,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 20.8681,
        "lon": -86.8668,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 23.18,
        "lon": -106.42,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.6049,
        "lon": 177.4383,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -38.7423,
        "lon": -73.431,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 61.933333,
        "lon": 5.116667,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 18.208137,
        "lon": -71.092154,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -21.61381,
        "lon": 166.24153,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -41.908,
        "lon": 171.433,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 56.24661,
        "lon": -134.64769,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.93461948,
        "lon": -121.8646755,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 31.267,
        "lon": 130.3,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 32.733,
        "lon": 129.867,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 24.45,
        "lon": 122.95,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.767,
        "lon": 134.6,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.65,
        "lon": 141.983,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.933,
        "lon": 140.9,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 44.0966,
        "lon": 9.8576,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96575489,
        "lon": -122.00385965,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.97290005,
        "lon": -122.00090857,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.95368621,
        "lon": -121.8841989,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 55.37168,
        "lon": -7.33432,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.4998,
        "lon": 12.6044,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.55,
        "lon": 133.55,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 42.3,
        "lon": 143.333,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -22.0938,
        "lon": -70.2117,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 48.425,
        "lon": -123.372,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 17.7477,
        "lon": -64.6984,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 18.3182,
        "lon": -64.7242,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 10.411474,
        "lon": -85.796222,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.59423065,
        "lon": 36.17676926,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.7667,
        "lon": 148.6525,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 20.949,
        "lon": 132.314,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.719,
        "lon": -118.272,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -13.706,
        "lon": -76.217,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.917834,
        "lon": 178.507014,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 7.4536833,
        "lon": 151.8982417,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.97,
        "lon": -122.02,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.187,
        "lon": -8.703,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.586,
        "lon": -9.075,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.79,
        "lon": 19.91,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.44685833,
        "lon": 12.63479722,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.50454167,
        "lon": 13.07645556,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -37.64109,
        "lon": 176.18118,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -30.3,
        "lon": 153.15,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -42.3707,
        "lon": 176.9109,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 24.162,
        "lon": -110.345,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.20458,
        "lon": -70.14783,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 53.726,
        "lon": -152.483,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -13.92,
        "lon": -76.28,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -12.069,
        "lon": -77.1668,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 6.9483,
        "lon": 79.8533,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.5066,
        "lon": -122.21,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 48.101,
        "lon": -122.758,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -52.96,
        "lon": -74.066,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.238724,
        "lon": -178.964264,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.293922,
        "lon": -178.98756,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.467,
        "lon": 135.783,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -34.6401,
        "lon": -72.0439,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.05,
        "lon": -104.333,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 16.30529,
        "lon": -61.79591,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 54.192,
        "lon": -133.003,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 52.163,
        "lon": -128.143,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 17.6361833,
        "lon": -101.5581833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 15.667,
        "lon": -96.483,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.605,
        "lon": -121.888,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 22.56,
        "lon": 114.25,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -37.59409,
        "lon": -73.66412,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 60.408611,
        "lon": 18.210833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.32,
        "lon": -122.4,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 24.52,
        "lon": 56.61,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -19.3096,
        "lon": 166.782,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -38.2001,
        "lon": -179.7978,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -33.02767,
        "lon": -71.62787,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -39.383,
        "lon": -73.233,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -41.867,
        "lon": -73.8278,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.690221,
        "lon": -85.007495,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -11.8,
        "lon": -77.18,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.289,
        "lon": -157.844,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 24.333,
        "lon": 124.167,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.7456,
        "lon": -124.184,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -36.6425,
        "lon": -73.0635,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.167,
        "lon": 139.617,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.885,
        "lon": 136.1,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 28.315,
        "lon": 129.538,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.133,
        "lon": 140.25,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.28146362,
        "lon": 33.83622742,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 22.2125,
        "lon": -159.4982,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.97280536,
        "lon": -122.00079071,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.97369328,
        "lon": -121.99823907,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.9739584,
        "lon": -121.99931569,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.93465658,
        "lon": -121.8647087,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.93370699,
        "lon": -121.8639541,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.95219491,
        "lon": -121.8826955,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -21.2,
        "lon": -159.783,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.967,
        "lon": 140.678,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 30.68,
        "lon": 130.967,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 32.433,
        "lon": 131.667,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.683,
        "lon": 137.617,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.483,
        "lon": 136.817,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.08,
        "lon": -8.26,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -7.733,
        "lon": 109.0,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.83553696,
        "lon": 30.61260986,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.008,
        "lon": -118.5,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-16 :: Location Name: 7552",
        "lat": -14.2766,
        "lon": -170.689,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-29 2:46:39 Location Name: ",
        "lat": -29.28,
        "lon": -177.8944,
        "dtype": "tsunami"
    },
    {
        "info": "2022-3-16 14:36:33 Location Name: ",
        "lat": 38.267,
        "lon": 141.033,
        "dtype": "tsunami"
    },
    {
        "info": "2022-3-16 14:36:33 Location Name: ",
        "lat": 37.833,
        "lon": 140.967,
        "dtype": "tsunami"
    },
    {
        "info": "2022-3-16 14:36:33 Location Name: ",
        "lat": 38.3,
        "lon": 141.5,
        "dtype": "tsunami"
    },
    {
        "info": "2022-3-16 14:36:33 Location Name: ",
        "lat": 36.933,
        "lon": 140.9,
        "dtype": "tsunami"
    },
    {
        "info": "2022-3-16 14:36:33 Location Name: ",
        "lat": 38.417,
        "lon": 141.267,
        "dtype": "tsunami"
    },
    {
        "info": "2022-3-30 20:56:58 Location Name: ",
        "lat": -21.9829,
        "lon": 166.6833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-3-30 20:56:58 Location Name: ",
        "lat": -21.548,
        "lon": 167.877,
        "dtype": "tsunami"
    },
    {
        "info": "2022-3-30 20:56:58 Location Name: ",
        "lat": -20.919,
        "lon": 167.279,
        "dtype": "tsunami"
    },
    {
        "info": "2022-3-31 5:44:1 Location Name: ",
        "lat": -21.548,
        "lon": 167.877,
        "dtype": "tsunami"
    },
    {
        "info": "2022-7-27 0:43:24 Location Name: ",
        "lat": 18.017,
        "lon": 120.483,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 16.83793,
        "lon": -99.903,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": -0.7533,
        "lon": -90.3117,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 36.424,
        "lon": -116.29,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 17.94,
        "lon": -102.17833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 5.54449,
        "lon": -87.0577,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 15.667,
        "lon": -96.483,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 19.7303,
        "lon": -155.0553,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 17.63618,
        "lon": -101.55818,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": -0.433,
        "lon": -90.283,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 20.65793,
        "lon": -105.24287,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 20.895,
        "lon": -156.477,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 19.05,
        "lon": -104.333,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 15.77,
        "lon": -96.1,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": -14.2766,
        "lon": -170.689,
        "dtype": "tsunami"
    },
    {
        "info": "2022-10-9 7:23: Location Name: 7557",
        "lat": 38.812108,
        "lon": 15.213684,
        "dtype": "tsunami"
    },
    {
        "info": "2022-10-9 7:23: Location Name: 7557",
        "lat": 38.7984,
        "lon": 15.1931,
        "dtype": "tsunami"
    },
    {
        "info": "2022-11-11 10:48:45 Location Name: ",
        "lat": -18.653,
        "lon": -173.983,
        "dtype": "tsunami"
    },
    {
        "info": "2022-11-11 10:48:45 Location Name: ",
        "lat": -15.95,
        "lon": -173.77,
        "dtype": "tsunami"
    },
    {
        "info": "2022-11-11 10:48:45 Location Name: ",
        "lat": -21.138,
        "lon": -175.1815,
        "dtype": "tsunami"
    },
    {
        "info": "2022-11-11 10:48:45 Location Name: ",
        "lat": -14.2766,
        "lon": -170.689,
        "dtype": "tsunami"
    },
    {
        "info": "2021-1-23 23:36:50 Location Name: ",
        "lat": -62.4793,
        "lon": -59.6629,
        "dtype": "tsunami"
    },
    {
        "info": "2021-1-23 23:36:50 Location Name: ",
        "lat": -63.320833,
        "lon": -57.898611,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -36.189,
        "lon": 175.489,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -21.9829,
        "lon": 166.6833,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -18.1342,
        "lon": 178.4236,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -34.4738,
        "lon": 150.9119,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -31.518,
        "lon": 159.065,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -19.53256,
        "lon": 169.26595,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -29.05833,
        "lon": 167.95361,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -20.919,
        "lon": 167.279,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -37.07366,
        "lon": 149.90774,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -38.2001,
        "lon": -179.7978,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -8.502,
        "lon": 179.195,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -37.55,
        "lon": 178.159,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -14.29602,
        "lon": -178.160225,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -21.548,
        "lon": 167.877,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -38.6754,
        "lon": 178.023,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -13.8268,
        "lon": -171.7613,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -34.4148,
        "lon": 173.0487,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -17.7553,
        "lon": 168.3077,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -35.17,
        "lon": 173.16,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-10 13:19:55 Location Name: ",
        "lat": -27.9,
        "lon": 153.43,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-13 14:7:50 Location Name: ",
        "lat": 38.60287392,
        "lon": 141.50377626,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-13 14:7:50 Location Name: ",
        "lat": 38.267,
        "lon": 141.033,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-13 14:7:50 Location Name: ",
        "lat": 37.833,
        "lon": 140.967,
        "dtype": "tsunami"
    },
    {
        "info": "2021-2-13 14:7:50 Location Name: ",
        "lat": 38.417,
        "lon": 141.267,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: ",
        "lat": -42.3707,
        "lon": 176.9109,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: ",
        "lat": -40.6003,
        "lon": 179.0996,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: ",
        "lat": -29.28,
        "lon": -177.8944,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: ",
        "lat": -37.64109,
        "lon": 176.18118,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: ",
        "lat": -36.0493,
        "lon": -177.708,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: ",
        "lat": -29.251,
        "lon": -177.9038,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: ",
        "lat": -37.5503,
        "lon": 178.159,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: ",
        "lat": -38.2001,
        "lon": -179.7978,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 13:27:36 Location Name: ",
        "lat": -36.189,
        "lon": 175.489,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 17:41:25 Location Name: ",
        "lat": -36.189,
        "lon": 175.489,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 17:41:25 Location Name: ",
        "lat": -37.5503,
        "lon": 178.159,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 17:41:25 Location Name: ",
        "lat": -8.9148,
        "lon": -140.0958,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 17:41:25 Location Name: ",
        "lat": -0.7533,
        "lon": -90.3117,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 17:41:25 Location Name: ",
        "lat": -34.4148,
        "lon": 173.0487,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 17:41:25 Location Name: ",
        "lat": -29.251,
        "lon": -177.903,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 17:41:25 Location Name: ",
        "lat": -29.05833,
        "lon": 167.95361,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 17:41:25 Location Name: ",
        "lat": -29.28,
        "lon": -177.8944,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -0.433,
        "lon": -90.283,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 21.9544,
        "lon": -159.3561,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -35.76,
        "lon": 174.35,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -34.4148,
        "lon": 173.0487,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -21.9829,
        "lon": 166.6833,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -27.15,
        "lon": -109.45,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 19.05,
        "lon": -104.333,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -18.1342,
        "lon": 178.4236,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -36.6425,
        "lon": -73.0635,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 24.162,
        "lon": -110.345,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -8.9148,
        "lon": -140.0958,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -38.7423,
        "lon": -73.431,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -39.8783,
        "lon": -73.4228,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 16.1684,
        "lon": -95.1968,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -19.53256,
        "lon": 169.26595,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 21.3067,
        "lon": -157.867,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -22.302,
        "lon": 166.44,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -29.058,
        "lon": 167.955,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 21.3194,
        "lon": -157.669,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -23.3516,
        "lon": -173.4015,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -20.2,
        "lon": 169.82,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -22.655,
        "lon": 167.444,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 20.895,
        "lon": -156.477,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -40.5808,
        "lon": -73.7372,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 16.83793,
        "lon": -99.903,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 40.2,
        "lon": 141.817,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -23.1221,
        "lon": -134.9666,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -26.3567,
        "lon": -70.6461,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -36.189,
        "lon": 175.489,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -37.55,
        "lon": 178.159,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -20.8003,
        "lon": -70.1942,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -15.5156,
        "lon": 167.1886,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 20.0366,
        "lon": -155.829,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -31.518,
        "lon": 159.065,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -21.548,
        "lon": 167.877,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -16.72216,
        "lon": -151.0324,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -36.53797,
        "lon": -72.957142,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 5.556083,
        "lon": -87.04783,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -20.20457778,
        "lon": -70.14783056,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -16.8921,
        "lon": -171.1904,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -42.3707,
        "lon": 176.9109,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -21.2,
        "lon": -159.783,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -23.1178,
        "lon": -134.9689,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -33.02767,
        "lon": -71.62787,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 21.3218,
        "lon": -158.1193,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 21.593,
        "lon": -158.1055,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 20.65793,
        "lon": -105.24287,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -20.6929,
        "lon": 164.9422,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -34.4738,
        "lon": 150.9119,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -33.58163,
        "lon": -71.61819,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -29.95,
        "lon": -71.3353,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 17.94,
        "lon": -102.17833,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 19.7303,
        "lon": -155.0553,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 15.77,
        "lon": -96.1,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -23.0975,
        "lon": -70.4508,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -23.3418,
        "lon": -149.4756,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -32.7819,
        "lon": -71.527,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -30.29216,
        "lon": -71.6079,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -36.0493,
        "lon": -177.708,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -40.6003,
        "lon": 179.0996,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -37.59409,
        "lon": -73.66412,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 27.0939,
        "lon": 142.1947,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -27.0644,
        "lon": -70.8247,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -36.6953,
        "lon": -73.1063,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -21.138,
        "lon": -175.1815,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -17.6049,
        "lon": 177.4383,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -43.733,
        "lon": -176.268,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -38.2001,
        "lon": -179.7978,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -17.7553,
        "lon": 168.3077,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -17.5331,
        "lon": -149.5726,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -21.55,
        "lon": 167.88,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -39.383,
        "lon": -73.233,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -0.7533,
        "lon": -90.3117,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -29.24611,
        "lon": -71.4686,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 41.7456,
        "lon": -124.184,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 9.4246,
        "lon": -84.1711,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -2.2177,
        "lon": -80.9064,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -38.13,
        "lon": 178.32,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -13.8268,
        "lon": -171.7613,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -28.175,
        "lon": 153.55,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -9.8049,
        "lon": -139.0347,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": -29.05833,
        "lon": 167.95361,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 35.17666,
        "lon": -120.755,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-4 19:28:31 Location Name: ",
        "lat": 5.544488,
        "lon": -87.0577,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-18 0:4:6 Location Name: ",
        "lat": 37.28576,
        "lon": 13.52684,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-18 0:4:6 Location Name: ",
        "lat": 38.927535,
        "lon": 8.719503,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-18 0:4:6 Location Name: ",
        "lat": 39.89304,
        "lon": 4.27056,
        "dtype": "tsunami"
    },
    {
        "info": "2021-3-18 0:4:6 Location Name: ",
        "lat": 39.55,
        "lon": 2.633,
        "dtype": "tsunami"
    },
    {
        "info": "2021-6-16 4:43:7 Location Name: ",
        "lat": -4.525,
        "lon": 129.897,
        "dtype": "tsunami"
    },
    {
        "info": "2021-6-16 4:43:7 Location Name: ",
        "lat": -3.33842,
        "lon": 128.921,
        "dtype": "tsunami"
    },
    {
        "info": "2021-6-16 4:43:7 Location Name: ",
        "lat": -3.37652778,
        "lon": 129.5416333,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 59.55,
        "lon": -139.733,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 36.605,
        "lon": -121.888,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 55.3,
        "lon": -148.5,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 42.737,
        "lon": -124.497,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 53.883,
        "lon": -166.533,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 55.062,
        "lon": -162.31,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 55.46,
        "lon": -133.13,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 58.2,
        "lon": -136.36,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 37.77166,
        "lon": -122.29833,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 33.719,
        "lon": -118.272,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 43.352,
        "lon": -124.192,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 52.9406,
        "lon": -168.871,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 37.997,
        "lon": -122.975,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 53.726,
        "lon": -152.483,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 19.7303,
        "lon": -155.0553,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 44.625,
        "lon": -124.043,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 41.7456,
        "lon": -124.184,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 35.17666,
        "lon": -120.755,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 51.863,
        "lon": -176.632,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 57.201,
        "lon": -153.305,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 47.909,
        "lon": -124.637,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 48.367,
        "lon": -124.612,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 55.337,
        "lon": -160.502,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 32.715,
        "lon": -117.174,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 37.807,
        "lon": -122.465,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 20.895,
        "lon": -156.477,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 60.119,
        "lon": -149.427,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 57.052,
        "lon": -135.342,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 60.48,
        "lon": -145.87,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 48.125,
        "lon": -123.44,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 49.153,
        "lon": -125.913,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 61.125,
        "lon": -146.362,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 51.068,
        "lon": -164.02,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 40.767,
        "lon": -124.217,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 57.73031,
        "lon": -152.51387,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 55.354,
        "lon": -160.504,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 56.24661,
        "lon": -134.64769,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 59.47,
        "lon": -151.68,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 58.3,
        "lon": -134.42,
        "dtype": "tsunami"
    },
    {
        "info": "2021-7-29 6:15:47 Location Name: ",
        "lat": 56.85,
        "lon": -154.3,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-11 17:46:14 Location Name: ",
        "lat": 1.438944,
        "lon": 125.190431,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-11 17:46:14 Location Name: ",
        "lat": 7.1537,
        "lon": 125.6629,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 19.671,
        "lon": -156.028,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -31.82,
        "lon": 115.73,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -69.007778,
        "lon": 39.570278,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 36.605,
        "lon": -121.888,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 19.0845,
        "lon": -155.5509,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -28.217,
        "lon": -48.65,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -33.96666,
        "lon": 25.63333,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 28.6778,
        "lon": -17.76795,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 21.3067,
        "lon": -157.867,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -23.1178,
        "lon": -134.9689,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -63.32083,
        "lon": -57.89861,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 41.7456,
        "lon": -124.184,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 19.7303,
        "lon": -155.0553,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -54.805,
        "lon": -68.295,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -34.17861,
        "lon": 22.13528,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 37.735,
        "lon": -25.672,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -62.4793,
        "lon": -59.6629,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -34.2,
        "lon": 18.433,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -54.93278,
        "lon": -67.60833,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 16.755,
        "lon": -22.9833,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -12.117,
        "lon": 96.883,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -20.1573,
        "lon": 57.5041,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -18.1536,
        "lon": 49.4281,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 20.895,
        "lon": -156.477,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -49.35,
        "lon": 70.22,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -9.8049,
        "lon": -139.0347,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 55.062,
        "lon": -162.31,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 34.252,
        "lon": -119.267,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -15.917918,
        "lon": -5.714394,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -8.9148,
        "lon": -140.0958,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 5.635343,
        "lon": 0.011775,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 52.9406,
        "lon": -168.871,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 57.052,
        "lon": -135.342,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 55.337,
        "lon": -160.502,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -46.875,
        "lon": 37.86,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 20.0366,
        "lon": -155.829,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -19.68024,
        "lon": 63.42119,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -28.8,
        "lon": 32.083,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 4.882123,
        "lon": -1.744972,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -33.87089,
        "lon": 121.89536,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -54.28,
        "lon": -36.5,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 35.17666,
        "lon": -120.755,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 37.807,
        "lon": -122.465,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 59.55,
        "lon": -139.733,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 57.73031,
        "lon": -152.51387,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -20.935,
        "lon": 55.2847,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 21.593,
        "lon": -158.1055,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -33.91,
        "lon": 18.43,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 28.08777,
        "lon": -17.10831,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": -51.75,
        "lon": -57.933,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 21.9544,
        "lon": -159.3561,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-12 18:35:20 Location Name: ",
        "lat": 33.719,
        "lon": -118.272,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-14 12:29:8 Location Name: ",
        "lat": 18.534471,
        "lon": -72.380044,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-14 12:29:8 Location Name: ",
        "lat": 20.8681,
        "lon": -86.8668,
        "dtype": "tsunami"
    },
    {
        "info": "2021-8-14 12:29:8 Location Name: ",
        "lat": 21.21666,
        "lon": -86.71667,
        "dtype": "tsunami"
    },
    {
        "info": "2021-9-8 1:47:47 Location Name: ",
        "lat": 16.83793,
        "lon": -99.903,
        "dtype": "tsunami"
    },
    {
        "info": "2021-12-14 3:20:24 Location Name: ",
        "lat": -8.285,
        "lon": 120.45,
        "dtype": "tsunami"
    },
    {
        "info": "2021-12-14 3:20:24 Location Name: ",
        "lat": -8.51,
        "lon": 121.33,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-13 :: Location Name: 7554",
        "lat": -21.138,
        "lon": -175.1815,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 52.98,
        "lon": -139.95,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.72,
        "lon": -76.67,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -40.5808,
        "lon": -73.7372,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 57.125,
        "lon": -170.275,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.593,
        "lon": -158.1055,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -34.4738,
        "lon": 150.9119,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -41.2846,
        "lon": 174.7791,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -23.3516,
        "lon": -173.4015,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 28.373376,
        "lon": -16.752875,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 15.5768,
        "lon": -61.4582,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 14.5822,
        "lon": 120.9716,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -16.6269,
        "lon": -143.5691,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -9.429,
        "lon": 159.955,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -31.517,
        "lon": 159.067,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.355,
        "lon": -74.4183,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.1616667,
        "lon": -90.0483333,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -23.65,
        "lon": -70.404,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -36.53797,
        "lon": -72.95714,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -37.029,
        "lon": -73.1518,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 4.9542,
        "lon": -90.8658,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 16.1684,
        "lon": -95.1968,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 10.1387333,
        "lon": -61.00195,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.29,
        "lon": 166.6183,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -39.8783,
        "lon": -73.4228,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 5.55608,
        "lon": -87.04783,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.22,
        "lon": -70.15,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.221254,
        "lon": -178.96381,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.249038,
        "lon": -178.978787,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.66439,
        "lon": -178.745708,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.6929,
        "lon": 164.9422,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.12,
        "lon": 178.53,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.17666,
        "lon": -120.755,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.71,
        "lon": -9.13,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 53.25,
        "lon": -132.08,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 20.65793,
        "lon": -105.24287,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -30.29216,
        "lon": -71.6079,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -6.6928,
        "lon": 156.4086,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 22.220278,
        "lon": 113.894444,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.807,
        "lon": -122.465,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 47.868,
        "lon": -3.913,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 51.068,
        "lon": -164.02,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 10.589007,
        "lon": -85.652691,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.793057,
        "lon": -85.280837,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.88876343,
        "lon": 28.02371979,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -12.96733,
        "lon": -38.51666,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 60.119,
        "lon": -149.427,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -13.8268,
        "lon": -171.7613,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 32.017,
        "lon": 130.2,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 26.217,
        "lon": 127.667,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.683,
        "lon": 135.35,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 30.733,
        "lon": 131.0,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.133,
        "lon": 139.8,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.05,
        "lon": 139.55,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.75,
        "lon": 140.867,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 26.26,
        "lon": 127.8,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 30.672,
        "lon": -81.465,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 42.664,
        "lon": -128.807,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.553,
        "lon": -156.546,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96362639,
        "lon": -122.00124122,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96656385,
        "lon": -122.00395576,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.97030626,
        "lon": -122.00005053,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.9740334,
        "lon": -121.9988935,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 17.697,
        "lon": -64.753,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 14.601667,
        "lon": -61.063333,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.3,
        "lon": 141.5,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.017,
        "lon": 138.883,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.017,
        "lon": 138.517,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -49.35,
        "lon": 70.22,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 56.85,
        "lon": -154.3,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 48.837,
        "lon": -125.137,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.88138,
        "lon": -85.523863,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 14.676,
        "lon": -17.42,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 51.6496,
        "lon": -9.9034,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.1536,
        "lon": 49.4281,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.9189,
        "lon": 139.825,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -36.189,
        "lon": 175.489,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -8.9148,
        "lon": -140.0958,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.267,
        "lon": 141.033,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.417,
        "lon": 141.267,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.217,
        "lon": 135.15,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 40.67664167,
        "lon": 14.75083889,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 55.422778,
        "lon": 13.825556,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 4.052,
        "lon": 146.592,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.3199,
        "lon": -157.6688,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -40.6003,
        "lon": 179.0996,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 44.4011,
        "lon": 155.6534,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.8,
        "lon": -121.78,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -39.88,
        "lon": -73.35,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 46.208,
        "lon": -123.767,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.27,
        "lon": -119.28,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.0009,
        "lon": -72.1088,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 50.513,
        "lon": -128.028,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -14.2766,
        "lon": -170.689,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -19.5969,
        "lon": -70.2138,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.05,
        "lon": -104.333,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.671,
        "lon": -156.028,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -29.6823,
        "lon": -175.0124,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 4.88212,
        "lon": -1.74497,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -37.55,
        "lon": 178.159,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 54.32,
        "lon": -130.33,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 52.6633,
        "lon": -156.7783,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.178107,
        "lon": -178.810463,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.54982,
        "lon": 166.56187,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -39.4757,
        "lon": 176.9201,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -36.0493,
        "lon": -177.708,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 16.755,
        "lon": -22.9833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.7303,
        "lon": -155.0553,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 15.2266,
        "lon": 145.742,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.3067,
        "lon": -157.867,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.21666,
        "lon": -86.71667,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -29.24611,
        "lon": -71.4686,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 14.71166,
        "lon": -92.40166,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 13.15,
        "lon": 123.75,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.43,
        "lon": 22.42,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.1436,
        "lon": 8.3081,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -54.93278,
        "lon": -67.60833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -2.282,
        "lon": 40.909,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 48.547,
        "lon": -123.007,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -36.1,
        "lon": 178.6,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -7.4262,
        "lon": -93.4812,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -13.73,
        "lon": -76.22,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -12.367,
        "lon": -76.8,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -36.733,
        "lon": -72.983,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 13.433,
        "lon": 144.65,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.7187,
        "lon": 140.7247,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.69316,
        "lon": -9.41538,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 31.583,
        "lon": 130.567,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.083,
        "lon": 136.2,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.53,
        "lon": -28.63,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96485716,
        "lon": -122.00119778,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.95368769,
        "lon": -121.8842586,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96220346,
        "lon": -122.0043663,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96166864,
        "lon": -122.0031556,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.5,
        "lon": 15.1,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 40.933,
        "lon": 141.4,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.85,
        "lon": 135.167,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -2.2177,
        "lon": -80.9064,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 59.55,
        "lon": -139.733,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 48.55,
        "lon": -124.4167,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 53.31,
        "lon": -4.62,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.883,
        "lon": 136.95,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 57.275,
        "lon": 16.478056,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.26,
        "lon": -70.13,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 14.697,
        "lon": -92.411,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 53.883,
        "lon": -166.533,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 55.062,
        "lon": -162.31,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 49.23,
        "lon": -124.82,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -11.92,
        "lon": -77.14,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -9.8049,
        "lon": -139.0347,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 52.2316,
        "lon": -174.172,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -44.0248,
        "lon": -176.369,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -54.28,
        "lon": -36.5,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -15.5156,
        "lon": 167.1886,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 15.77,
        "lon": -96.1,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -34.4148,
        "lon": 173.0487,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 32.715,
        "lon": -117.174,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 30.403,
        "lon": -87.212,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.1733,
        "lon": -73.1816,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 43.6567,
        "lon": -70.24669,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.4683,
        "lon": -120.673,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.17666,
        "lon": -120.755,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.213361,
        "lon": -178.932424,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -19.822362,
        "lon": -178.251526,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.241818,
        "lon": -178.937331,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -32.1333,
        "lon": -71.5333,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 1.984,
        "lon": -157.473,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 57.391944,
        "lon": 11.919167,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 44.625,
        "lon": -124.043,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -63.32083,
        "lon": -57.89861,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.1342,
        "lon": 178.4236,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 57.052,
        "lon": -135.342,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.997,
        "lon": -122.975,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -25.00898,
        "lon": -70.46873,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -43.4333,
        "lon": 146.9748,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 40.47560278,
        "lon": 17.22376389,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.541111,
        "lon": 95.66778,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -62.4793,
        "lon": -59.6629,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.96,
        "lon": 76.26,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 28.8891,
        "lon": 135.0194,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.919,
        "lon": 167.279,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 16.83793,
        "lon": -99.903,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 8.733,
        "lon": 167.733,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.77166,
        "lon": -122.29833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -43.57,
        "lon": 172.773,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -13.715,
        "lon": -76.22,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.935276,
        "lon": -85.664588,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.691511,
        "lon": -85.006293,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -23.1178,
        "lon": -134.9689,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 42.633,
        "lon": 141.617,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.783,
        "lon": 139.383,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 26.145,
        "lon": 127.767,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.3483,
        "lon": -9.3733,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.83798981,
        "lon": 28.38484573,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 29.2633,
        "lon": -89.9567,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 29.03,
        "lon": 121.62,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96518189,
        "lon": -122.00129378,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96856814,
        "lon": -122.00152813,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -65.25,
        "lon": -64.2667,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.93466435,
        "lon": -121.8647121,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.95379604,
        "lon": -121.8840975,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 20.895,
        "lon": -156.477,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.267,
        "lon": 141.883,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.617,
        "lon": 138.85,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 31.4667,
        "lon": 131.105,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 31.017,
        "lon": 130.683,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 40.533,
        "lon": 141.533,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -19.277,
        "lon": 147.058,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -9.008,
        "lon": -158.037,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 31.583,
        "lon": 131.417,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 25.833,
        "lon": 131.233,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 40.767,
        "lon": -124.217,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.748778,
        "lon": -84.992915,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 5.557951,
        "lon": -87.048277,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -43.8983,
        "lon": -73.7483,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.4686,
        "lon": -73.4328,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -15.02285,
        "lon": 117.94233,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 1.367,
        "lon": 172.933,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 5.89,
        "lon": -162.09,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 49.626,
        "lon": -169.871,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 49.901,
        "lon": -134.395,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 51.863,
        "lon": -176.632,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 46.908,
        "lon": -124.11,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -26.3567,
        "lon": -70.6461,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -27.0644,
        "lon": -70.8247,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.9667,
        "lon": -7.8667,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.0,
        "lon": 25.74,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 58.768889,
        "lon": 17.858889,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 51.21,
        "lon": -4.11,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 17.94,
        "lon": -102.17833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -33.58163,
        "lon": -71.61819,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -34.6873055,
        "lon": -72.05786,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -42.48056,
        "lon": -73.75833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -27.9,
        "lon": 153.43,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 6.9806,
        "lon": 158.2001,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 42.64,
        "lon": 8.94,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.8,
        "lon": -70.683,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -9.5092,
        "lon": -176.2586,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -26.283,
        "lon": -80.117,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -13.170479,
        "lon": -176.100665,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.663561,
        "lon": -178.720505,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.636615,
        "lon": -178.722924,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.559748,
        "lon": 179.93774,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 49.153,
        "lon": -125.913,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -23.3418,
        "lon": -149.4756,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 28.215,
        "lon": -177.361,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.8003,
        "lon": -70.1942,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -2.04,
        "lon": 147.4,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 47.909,
        "lon": -124.637,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 22.27,
        "lon": 113.54,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 13.5739,
        "lon": -89.8383,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -16.8,
        "lon": -179.95,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -16.6,
        "lon": 179.0,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.87141,
        "lon": -85.49256,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 3.9725,
        "lon": -77.3275,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.4246,
        "lon": -84.1711,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 10.926265,
        "lon": -85.717401,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 45.41,
        "lon": 141.69,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 42.9756,
        "lon": 144.3714,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 48.367,
        "lon": -124.612,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.0189,
        "lon": -122.13323,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.93462086,
        "lon": -121.8646772,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 29.85,
        "lon": 129.85,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.55,
        "lon": 135.9,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 24.553,
        "lon": -81.808,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 13.392,
        "lon": -87.8,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96710625,
        "lon": -122.00389826,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.95387666,
        "lon": -121.8841802,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96188998,
        "lon": -122.0037782,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 28.383,
        "lon": 129.5,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.66,
        "lon": 137.27,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 24.8,
        "lon": 125.283,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 49.917861,
        "lon": -6.317222,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -29.05833,
        "lon": 167.95361,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -25.4081,
        "lon": -70.4917,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.698,
        "lon": -8.838,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.08,
        "lon": 17.14,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 56.154167,
        "lon": 14.821389,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -26.6672,
        "lon": 163.9549,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -24.3093,
        "lon": 169.4988,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -23.0975,
        "lon": -70.4508,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 55.3092,
        "lon": -148.5407,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.192061,
        "lon": -96.123553,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 20.864506,
        "lon": -90.405121,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.4758,
        "lon": -70.3232,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -29.95,
        "lon": -71.3353,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.7553,
        "lon": 168.3077,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 10.444974,
        "lon": -85.774151,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -42.5465,
        "lon": 147.9307,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 64.17,
        "lon": -51.73,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 64.915833,
        "lon": 21.230556,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 13.129912,
        "lon": -61.1955,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.811985,
        "lon": -90.594916,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.333,
        "lon": -127.082,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -4.583,
        "lon": -81.283,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -0.5319,
        "lon": 166.9092,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.914,
        "lon": -123.711,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 45.23,
        "lon": 147.88,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 50.678857,
        "lon": 156.135304,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.252,
        "lon": -119.267,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 20.96355,
        "lon": -97.3286,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.310499,
        "lon": -178.990843,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.670627,
        "lon": -178.506758,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -0.7533,
        "lon": -90.3117,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.3218,
        "lon": -158.1193,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -14.715,
        "lon": 153.537,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 42.737,
        "lon": -124.497,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 58.2,
        "lon": -136.36,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 5.544488,
        "lon": -87.0577,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -21.138,
        "lon": -175.1815,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -21.25,
        "lon": -159.75,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 29.212,
        "lon": 121.945,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 5.635343,
        "lon": 0.011775,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 32.7792,
        "lon": 132.9589,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.40829,
        "lon": -119.68499,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.935,
        "lon": 55.2847,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.149609,
        "lon": -83.758848,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 56.649722,
        "lon": 12.8425,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 18.4805,
        "lon": -66.7024,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 10.300407,
        "lon": -85.841638,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 32.641,
        "lon": -16.918,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.286,
        "lon": 155.766,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.298,
        "lon": -70.659,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.133,
        "lon": 139.617,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 42.167,
        "lon": 142.767,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.1,
        "lon": 139.767,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 40.642,
        "lon": -8.748,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 51.707,
        "lon": -5.052,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -46.922,
        "lon": 160.562,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -0.433,
        "lon": -90.283,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 28.02169,
        "lon": -97.04669,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 13.1529,
        "lon": -87.4202,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96686674,
        "lon": -122.00387842,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.97355426,
        "lon": -121.99881155,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.95368333,
        "lon": -121.8841819,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 31.9,
        "lon": 131.45,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.867,
        "lon": 138.333,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.933,
        "lon": 143.25,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 43.083,
        "lon": 145.133,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.833,
        "lon": 140.967,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 48.1216,
        "lon": 163.4209,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.92833,
        "lon": -122.4,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -33.87089,
        "lon": 121.89536,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -21.9829,
        "lon": 166.6833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 43.352,
        "lon": -124.192,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -23.161,
        "lon": 150.79,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -42.8923,
        "lon": 147.338,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -37.07366,
        "lon": 149.90774,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.914,
        "lon": -123.711,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 16.7363,
        "lon": -169.5283,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 31.8484,
        "lon": -116.6181,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 50.722,
        "lon": -127.488,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 47.57,
        "lon": -52.72,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -11.75,
        "lon": -77.133,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 58.46,
        "lon": -5.05,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.0009,
        "lon": -72.1088,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 15.755,
        "lon": -96.13,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 12.881,
        "lon": 132.333,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 16.224398,
        "lon": -61.531452,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -41.0501,
        "lon": 145.915,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 20.0366,
        "lon": -155.829,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.178495,
        "lon": -178.791847,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.240369,
        "lon": -178.78365,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.620527,
        "lon": 179.892953,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.5331,
        "lon": -149.5726,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.953,
        "lon": -8.887,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -6.74,
        "lon": -80.0,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -35.61,
        "lon": 174.528,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 42.3559,
        "lon": 14.41486111,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 52.9406,
        "lon": -168.871,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 46.705,
        "lon": -123.966,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 48.125,
        "lon": -123.44,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 23.42,
        "lon": 117.02,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -46.0858,
        "lon": 166.5894,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -38.3434,
        "lon": 141.6132,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.133,
        "lon": 152.145,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.15,
        "lon": -119.18,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 16.941,
        "lon": 54.008,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -43.9733,
        "lon": 168.6161,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 51.833,
        "lon": 158.067,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.883005,
        "lon": -85.577134,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 10.474772,
        "lon": -85.780027,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 10.435249,
        "lon": -85.792452,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -5.3737,
        "lon": 164.991,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 11.575,
        "lon": 154.588,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -14.0461,
        "lon": 110.0275,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -13.84,
        "lon": -76.25,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -33.63602,
        "lon": -78.82988,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.45,
        "lon": -158.197,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.6,
        "lon": -155.95,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.017,
        "lon": 141.75,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 25.90028,
        "lon": -89.2869,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.93458868,
        "lon": -121.8646587,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.083,
        "lon": 136.883,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.217,
        "lon": 139.133,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.067,
        "lon": 139.483,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.267,
        "lon": 134.167,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.333,
        "lon": 133.25,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.367,
        "lon": 141.233,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.667,
        "lon": 138.95,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 1.833,
        "lon": -78.733,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.735,
        "lon": -25.672,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 23.867,
        "lon": -166.283,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 18.22,
        "lon": -67.16,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 18.0899,
        "lon": -67.9385,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.97265661,
        "lon": -122.00046472,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.333,
        "lon": 140.583,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 40.2,
        "lon": 141.817,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 43.2781,
        "lon": 145.5678,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.017,
        "lon": 134.583,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.8,
        "lon": -149.2833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -24.22,
        "lon": 113.3975,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 18.333,
        "lon": -64.917,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 27.0939,
        "lon": 142.1947,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.6083,
        "lon": 138.2222,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.604613,
        "lon": -85.084787,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 20.7986,
        "lon": 65.3466,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 14.6768944,
        "lon": -60.9379306,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 50.153,
        "lon": 171.897,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 32.867,
        "lon": -117.257,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -12.39,
        "lon": -76.78,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -16.72216,
        "lon": -151.0324,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -26.7502,
        "lon": -73.9905,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.945,
        "lon": -25.1483,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 43.48,
        "lon": 6.93,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -22.2466,
        "lon": 166.4116,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 45.857,
        "lon": -128.736,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 18.3008,
        "lon": -65.3028,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -28.467,
        "lon": -71.22,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -35.3558,
        "lon": -72.4578,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.76,
        "lon": -122.51,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 58.3,
        "lon": -134.42,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 20.742,
        "lon": -156.888,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -8.502,
        "lon": 179.195,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 18.2967667,
        "lon": -93.85455,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -36.6953,
        "lon": -73.1063,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.84,
        "lon": 9.37,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.627703,
        "lon": 179.871646,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.668037,
        "lon": -178.49875,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.664697,
        "lon": -178.721033,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -32.7819,
        "lon": -71.527,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.9544,
        "lon": -159.3561,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.3194,
        "lon": -157.669,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 7.1537,
        "lon": 125.6629,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 55.337,
        "lon": -160.502,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -38.6754,
        "lon": 178.023,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -27.15,
        "lon": -109.45,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 20.8681,
        "lon": -86.8668,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 23.18,
        "lon": -106.42,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.6049,
        "lon": 177.4383,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -38.7423,
        "lon": -73.431,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 61.933333,
        "lon": 5.116667,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 18.208137,
        "lon": -71.092154,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -21.61381,
        "lon": 166.24153,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -41.908,
        "lon": 171.433,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 56.24661,
        "lon": -134.64769,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.93461948,
        "lon": -121.8646755,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 31.267,
        "lon": 130.3,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 32.733,
        "lon": 129.867,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 24.45,
        "lon": 122.95,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.767,
        "lon": 134.6,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.65,
        "lon": 141.983,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.933,
        "lon": 140.9,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 44.0966,
        "lon": 9.8576,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.96575489,
        "lon": -122.00385965,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.97290005,
        "lon": -122.00090857,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.95368621,
        "lon": -121.8841989,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 55.37168,
        "lon": -7.33432,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.4998,
        "lon": 12.6044,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.55,
        "lon": 133.55,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 42.3,
        "lon": 143.333,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -22.0938,
        "lon": -70.2117,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 48.425,
        "lon": -123.372,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 17.7477,
        "lon": -64.6984,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 18.3182,
        "lon": -64.7242,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 10.411474,
        "lon": -85.796222,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.59423065,
        "lon": 36.17676926,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 38.7667,
        "lon": 148.6525,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 20.949,
        "lon": 132.314,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.719,
        "lon": -118.272,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -13.706,
        "lon": -76.217,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -18.917834,
        "lon": 178.507014,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 7.4536833,
        "lon": 151.8982417,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.97,
        "lon": -122.02,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.187,
        "lon": -8.703,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.586,
        "lon": -9.075,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 39.79,
        "lon": 19.91,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.44685833,
        "lon": 12.63479722,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.50454167,
        "lon": 13.07645556,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -37.64109,
        "lon": 176.18118,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -30.3,
        "lon": 153.15,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -42.3707,
        "lon": 176.9109,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 24.162,
        "lon": -110.345,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -20.20458,
        "lon": -70.14783,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 53.726,
        "lon": -152.483,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -13.92,
        "lon": -76.28,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -12.069,
        "lon": -77.1668,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 6.9483,
        "lon": 79.8533,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.5066,
        "lon": -122.21,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 48.101,
        "lon": -122.758,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -52.96,
        "lon": -74.066,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.238724,
        "lon": -178.964264,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -17.293922,
        "lon": -178.98756,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.467,
        "lon": 135.783,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -34.6401,
        "lon": -72.0439,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 19.05,
        "lon": -104.333,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 16.30529,
        "lon": -61.79591,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 54.192,
        "lon": -133.003,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 52.163,
        "lon": -128.143,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 17.6361833,
        "lon": -101.5581833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 15.667,
        "lon": -96.483,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.605,
        "lon": -121.888,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 22.56,
        "lon": 114.25,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -37.59409,
        "lon": -73.66412,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 60.408611,
        "lon": 18.210833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.32,
        "lon": -122.4,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 24.52,
        "lon": 56.61,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -19.3096,
        "lon": 166.782,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -38.2001,
        "lon": -179.7978,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -33.02767,
        "lon": -71.62787,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -39.383,
        "lon": -73.233,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -41.867,
        "lon": -73.8278,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 9.690221,
        "lon": -85.007495,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -11.8,
        "lon": -77.18,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 21.289,
        "lon": -157.844,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 24.333,
        "lon": 124.167,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 41.7456,
        "lon": -124.184,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -36.6425,
        "lon": -73.0635,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.167,
        "lon": 139.617,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 33.885,
        "lon": 136.1,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 28.315,
        "lon": 129.538,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.133,
        "lon": 140.25,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.28146362,
        "lon": 33.83622742,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 22.2125,
        "lon": -159.4982,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.97280536,
        "lon": -122.00079071,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.97369328,
        "lon": -121.99823907,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.9739584,
        "lon": -121.99931569,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.93465658,
        "lon": -121.8647087,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.93370699,
        "lon": -121.8639541,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.95219491,
        "lon": -121.8826955,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -21.2,
        "lon": -159.783,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 35.967,
        "lon": 140.678,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 30.68,
        "lon": 130.967,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 32.433,
        "lon": 131.667,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.683,
        "lon": 137.617,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.483,
        "lon": 136.817,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 37.08,
        "lon": -8.26,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": -7.733,
        "lon": 109.0,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 36.83553696,
        "lon": 30.61260986,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-15 4:14:45 Location Name: 7551",
        "lat": 34.008,
        "lon": -118.5,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-16 :: Location Name: 7552",
        "lat": -14.2766,
        "lon": -170.689,
        "dtype": "tsunami"
    },
    {
        "info": "2022-1-29 2:46:39 Location Name: ",
        "lat": -29.28,
        "lon": -177.8944,
        "dtype": "tsunami"
    },
    {
        "info": "2022-3-16 14:36:33 Location Name: ",
        "lat": 38.267,
        "lon": 141.033,
        "dtype": "tsunami"
    },
    {
        "info": "2022-3-16 14:36:33 Location Name: ",
        "lat": 37.833,
        "lon": 140.967,
        "dtype": "tsunami"
    },
    {
        "info": "2022-3-16 14:36:33 Location Name: ",
        "lat": 38.3,
        "lon": 141.5,
        "dtype": "tsunami"
    },
    {
        "info": "2022-3-16 14:36:33 Location Name: ",
        "lat": 36.933,
        "lon": 140.9,
        "dtype": "tsunami"
    },
    {
        "info": "2022-3-16 14:36:33 Location Name: ",
        "lat": 38.417,
        "lon": 141.267,
        "dtype": "tsunami"
    },
    {
        "info": "2022-3-30 20:56:58 Location Name: ",
        "lat": -21.9829,
        "lon": 166.6833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-3-30 20:56:58 Location Name: ",
        "lat": -21.548,
        "lon": 167.877,
        "dtype": "tsunami"
    },
    {
        "info": "2022-3-30 20:56:58 Location Name: ",
        "lat": -20.919,
        "lon": 167.279,
        "dtype": "tsunami"
    },
    {
        "info": "2022-3-31 5:44:1 Location Name: ",
        "lat": -21.548,
        "lon": 167.877,
        "dtype": "tsunami"
    },
    {
        "info": "2022-7-27 0:43:24 Location Name: ",
        "lat": 18.017,
        "lon": 120.483,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 16.83793,
        "lon": -99.903,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": -0.7533,
        "lon": -90.3117,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 36.424,
        "lon": -116.29,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 17.94,
        "lon": -102.17833,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 5.54449,
        "lon": -87.0577,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 15.667,
        "lon": -96.483,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 19.7303,
        "lon": -155.0553,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 17.63618,
        "lon": -101.55818,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": -0.433,
        "lon": -90.283,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 20.65793,
        "lon": -105.24287,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 20.895,
        "lon": -156.477,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 19.05,
        "lon": -104.333,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": 15.77,
        "lon": -96.1,
        "dtype": "tsunami"
    },
    {
        "info": "2022-9-19 18:5:6 Location Name: ",
        "lat": -14.2766,
        "lon": -170.689,
        "dtype": "tsunami"
    },
    {
        "info": "2022-10-9 7:23: Location Name: 7557",
        "lat": 38.812108,
        "lon": 15.213684,
        "dtype": "tsunami"
    },
    {
        "info": "2022-10-9 7:23: Location Name: 7557",
        "lat": 38.7984,
        "lon": 15.1931,
        "dtype": "tsunami"
    },
    {
        "info": "2022-11-11 10:48:45 Location Name: ",
        "lat": -18.653,
        "lon": -173.983,
        "dtype": "tsunami"
    },
    {
        "info": "2022-11-11 10:48:45 Location Name: ",
        "lat": -15.95,
        "lon": -173.77,
        "dtype": "tsunami"
    },
    {
        "info": "2022-11-11 10:48:45 Location Name: ",
        "lat": -21.138,
        "lon": -175.1815,
        "dtype": "tsunami"
    },
    {
        "info": "2022-11-11 10:48:45 Location Name: ",
        "lat": -14.2766,
        "lon": -170.689,
        "dtype": "tsunami"
    }
];