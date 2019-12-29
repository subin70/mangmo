var parkPositions = [
    new kakao.maps.LatLng(35.897221	, 128.5847829	),
    new kakao.maps.LatLng(35.9004074	, 128.6047509	),
    new kakao.maps.LatLng(35.9026969	, 128.6136141	),
    new kakao.maps.LatLng(35.9316356	, 128.5461611	),
    new kakao.maps.LatLng(35.9358662	, 128.5451274	),
    new kakao.maps.LatLng(35.928446	, 128.556778	),
    new kakao.maps.LatLng(35.907348	, 128.608925	),
    new kakao.maps.LatLng(35.9424608	, 128.5704889	),
    new kakao.maps.LatLng(35.934522	, 128.559295	),
    new kakao.maps.LatLng(35.921359	, 128.595302	),
    new kakao.maps.LatLng(35.918992	, 128.602334	),
    new kakao.maps.LatLng(35.909019	, 128.540525	),
    new kakao.maps.LatLng(35.901205	, 128.51276	),
    new kakao.maps.LatLng(35.901205	, 128.51276	),
    new kakao.maps.LatLng(35.8958224	, 128.5203245	),
    new kakao.maps.LatLng(35.877042	, 128.592385	),
    new kakao.maps.LatLng(35.8925	, 128.569919	),
    new kakao.maps.LatLng(35.889349	, 128.571309	),
    new kakao.maps.LatLng(35.888801	, 128.574056	),
    new kakao.maps.LatLng(35.893546	, 128.6083117	),
    new kakao.maps.LatLng(35.897252	, 128.607359	),
    new kakao.maps.LatLng(35.89336926	, 128.6173144	),
    new kakao.maps.LatLng(35.89652	, 128.61691	),
    new kakao.maps.LatLng(35.897426	, 128.622502	),
    new kakao.maps.LatLng(35.891944	, 128.627141	),
    new kakao.maps.LatLng(35.884373	, 128.610334	),
    new kakao.maps.LatLng(35.926433	, 128.559251	),
    new kakao.maps.LatLng(35.93393	, 128.55625	),
    new kakao.maps.LatLng(35.932631	, 128.55874	),
    new kakao.maps.LatLng(35.930735	, 128.557604	),
    new kakao.maps.LatLng(35.92847	, 128.558667	),
    new kakao.maps.LatLng(35.927019	, 128.552733	),
    new kakao.maps.LatLng(35.926167	, 128.55531	),
    new kakao.maps.LatLng(35.945945	, 128.547713	),
    new kakao.maps.LatLng(35.94467	, 128.544648	),
    new kakao.maps.LatLng(35.940078	, 128.545049	),
    new kakao.maps.LatLng(35.939176	, 128.55527	),
    new kakao.maps.LatLng(35.937173	, 128.54564	),
    new kakao.maps.LatLng(35.9293169	, 128.55067	),
    new kakao.maps.LatLng(35.927589	, 128.55	),
    new kakao.maps.LatLng(35.926953	, 128.546255	),
    new kakao.maps.LatLng(35.942987	, 128.547188	),
    new kakao.maps.LatLng(35.940615	, 128.549621	),
    new kakao.maps.LatLng(35.945926	, 128.558193	),
    new kakao.maps.LatLng(35.945892	, 128.561755	),
    new kakao.maps.LatLng(35.94526	, 128.566215	),
    new kakao.maps.LatLng(35.94535	, 128.571177	),
    new kakao.maps.LatLng(35.94780252	, 128.5763194	),
    new kakao.maps.LatLng(35.949259	, 128.5774	),
    new kakao.maps.LatLng(35.940002	, 128.558649	),
    new kakao.maps.LatLng(35.938227	, 128.560574	),
    new kakao.maps.LatLng(35.938091	, 128.564823	),
    new kakao.maps.LatLng(35.940722	, 128.567747	),
    new kakao.maps.LatLng(35.9355107	, 128.5569748	),
    new kakao.maps.LatLng(35.935579	, 128.564783	),
    new kakao.maps.LatLng(35.938382	, 128.568549	),
    new kakao.maps.LatLng(35.935429	, 128.567071	),
    new kakao.maps.LatLng(35.932303	, 128.563967	),
    new kakao.maps.LatLng(35.946833	, 128.572621	),
    new kakao.maps.LatLng(35.943191	, 128.572443	),
    new kakao.maps.LatLng(35.938199	, 128.558312	),
    new kakao.maps.LatLng(35.927498	, 128.596129	),
    new kakao.maps.LatLng(35.924617	, 128.595505	),
    new kakao.maps.LatLng(35.922827	, 128.597094	),
    new kakao.maps.LatLng(35.919226	, 128.597017	),
    new kakao.maps.LatLng(35.91753	, 128.596128	),
    new kakao.maps.LatLng(35.921245	, 128.601064	),
    new kakao.maps.LatLng(35.920056	, 128.605362	),
    new kakao.maps.LatLng(35.916167	, 128.604417	),
    new kakao.maps.LatLng(35.950699	, 128.565939	),
    new kakao.maps.LatLng(35.949938	, 128.568078	),
    new kakao.maps.LatLng(35.947964	, 128.566339	),
    new kakao.maps.LatLng(35.949049	, 128.568834	),
    new kakao.maps.LatLng(35.884848	, 128.595304	),
    new kakao.maps.LatLng(35.89871	, 128.619808	),
    new kakao.maps.LatLng(35.912963	, 128.546205	),
    new kakao.maps.LatLng(35.909905	, 128.546071	),
    new kakao.maps.LatLng(35.909488	, 128.547176	),
    new kakao.maps.LatLng(35.907424	, 128.545	),
    new kakao.maps.LatLng(35.907611	, 128.542928	),
    new kakao.maps.LatLng(35.895288	, 128.523304	),
    new kakao.maps.LatLng(35.898911	, 128.509262	),
    new kakao.maps.LatLng(35.900979	, 128.510303	),
    new kakao.maps.LatLng(35.878108	, 128.59392	),
    new kakao.maps.LatLng(35.891896	, 128.588362	),
    new kakao.maps.LatLng(35.900462	, 128.619722	),
    new kakao.maps.LatLng(35.921974	, 128.550343	),
    new kakao.maps.LatLng(35.891702	, 128.569643	),
    new kakao.maps.LatLng(35.891702	, 128.569643	),
    new kakao.maps.LatLng(35.891702	, 128.569643	),
    new kakao.maps.LatLng(35.885611	, 128.582959	),
    new kakao.maps.LatLng(35.885611	, 128.582959	),
    new kakao.maps.LatLng(35.885611	, 128.582959	),
    new kakao.maps.LatLng(35.885611	, 128.582959	),
];