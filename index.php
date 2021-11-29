<!doctype html>
<html lang="cs">

<head>
    <meta charset="utf-8">
    <title>SKI Luisino údolí - Dolní Dvůr - Krkonoše</title>
    <meta name="description"
        content="SKI Luisino údolí je rekreační lyžařský areál rodinného typu nacházející se v obci Dolní Dvůr v srdci Krkonoš. K dispozici máme 2 lyžařské vleky, lyžařskou školu, půjčovnu vybavení, občerstvení u horní stanice vleku a parkoviště zdarma.">
    <meta name="author"
        content="Daniel Maděra">
    <meta content="width=device-width, initial-scale=1"
        name="viewport" />
    <link rel="stylesheet"
        href="css/app.css?v=1.0">
    <link rel="stylesheet"
        href="assets/dnk-gallery/css/jquery.donkeyGallery.packed.min.css">
    <link rel="shortcut icon"
        href="/favicon.png">
    <link rel="shortcut icon"
        href="favicon.png"
        type="image/png">
    <?php
    require_once('scripts/init-session.php');
    function isDevSite()
    {
        return strpos($_SERVER['SERVER_NAME'], 'new.skiareal-krkonose.cz') !== false;
    }
    ?>
    <script type="text/javascript">
    window.localStorage.setItem('token', "<?php echo $token; ?>");
    window.localStorage.setItem('api-captcha-client', "<?php echo $apikeys['captcha-client']; ?>");
    </script>
</head>

<body>
    <header id="home">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark top">
            <a href="#home"
                class="navbar-brand logo">
                <h1 class="text-hide">SKI Luisino údolí - Dolní Dvůr - Krkonoše</h1>
                <img src="img/logo.svg"
                    alt="SKI AREÁL Luisino údolí" />
                <h2 class="subtitle d-none d-lg-block">
                    Rodinné lyžování v srdci Krkonoš
                </h2>
            </a>
            <button class="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbar"
                aria-controls="navbar"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse"
                id="navbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link"
                            href="#areal"
                            title="Lyžování">Lyžování</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                            href="#webcams"
                            title="Webkamery">Webkamery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                            href="#skimap"
                            title="Lyžařská mapa">Skimapa</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                            href="#prices"
                            title="Ceník skipasů">Ceník</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                            href="#rental"
                            title="Půjčovna vybavení">Půjčovna</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                            href="#school"
                            title="Lyžařská škola">Škola</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                            href="#map"
                            title="Mapa">Kde nás najdete</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                            href="#contact"
                            title="Kontakt">Kontakt</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <main role="main">
        <div class="modal main_modal"
            tabindex="-1"
            role="dialog"
            <?php echo 'data-enabled="' . $main_modal['show'] . '"'; ?>>
            <div class="modal-dialog"
                role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <?php echo isset($main_modal['header']) ? $main_modal['header'] : ""; ?>
                        </h5>
                        <button type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>
                            <?php echo isset($main_modal['body']) ? $main_modal['body'] : ""; ?>
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal">Zavřít</button>
                    </div>
                </div>
            </div>
        </div>
        <section class="welcome">
            <div class="container-fluid">
                <div class="row pull-bottom">
                    <div class="col-lg-5 col-xl-4">
                        <table class="card areal table">
                            <tbody>
                                <tr>
                                    <th colspan="4">Vleky</th>
                                </tr>
                                <tr class="kotva">
                                    <td class="icon grey-bg">
                                        <img src="img/layout/kotva.svg" />
                                    </td>
                                    <td>KOTVA</td>
                                    <td>500m</td>
                                    <td class="status"
                                        title=""></td>
                                </tr>
                                <tr class="poma">
                                    <td class="icon grey-bg">
                                        <img src="img/layout/poma.svg" />
                                    </td>
                                    <td>POMA</td>
                                    <td>300m</td>
                                    <td class="status"
                                        title=""></td>
                                </tr>
                                <tr>
                                    <th colspan="4">Sjezovky</th>
                                </tr>
                                <tr class="slunecnastran-ukotvy">
                                    <td class="icon">
                                        <img src="img/layout/red-slope.svg" />
                                    </td>
                                    <td>Slunečná stráň</td>
                                    <td>550m</td>
                                    <td class="status"
                                        title=""></td>
                                </tr>
                                <tr class="slunecnastranii-upomy d-none">
                                    <td class="icon">
                                        <img src="img/layout/red-slope.svg" />
                                    </td>
                                    <td>Slunečná stráň</td>
                                    <td>550m</td>
                                    <td class="status"
                                        title=""></td>
                                </tr>
                                <tr class="vyhlidkovaulesa">
                                    <td class="icon">
                                        <img src="img/layout/blue-slope.svg" />
                                    </td>
                                    <td>U lesa</td>
                                    <td>600m</td>
                                    <td class="status"
                                        title=""></td>
                                </tr>
                                <tr class="snowpark-snowcross">
                                    <td class="icon">
                                        <img src="img/layout/snowpark-slope.svg" />
                                    </td>
                                    <td>Snowpark</td>
                                    <td>300m</td>
                                    <td class="status"
                                        title=""></td>
                                </tr>
                                <tr>
                                    <th colspan="4">Aktuální stav</th>
                                </tr>
                                <tr class="temperature">
                                    <td class="icon">
                                        <img src="img/layout/thermometer.svg" />
                                    </td>
                                    <td>Teplota</td>
                                    <td colspan="2"
                                        class="text-right">
                                        <span id="temperature"></span>
                                        <span id="weathertext"></span>
                                    </td>
                                </tr>
                                <tr class="snow">
                                    <td class="icon">
                                        <img src="img/layout/snowflake.svg" />
                                    </td>
                                    <td>Výška sněhu</td>
                                    <td colspan="2"
                                        class="text-right">
                                        <span id="snowheight"></span>
                                    </td>
                                </tr>
                                <tr class="snow">
                                    <td class="icon">
                                        <img src="img/layout/snowflake.svg" />
                                    </td>
                                    <td>Typ sněhu</td>
                                    <td colspan="2"
                                        class="text-right">
                                        <span id="snowtype"></span>
                                    </td>
                                </tr>
                                <tr class="snowmaking d-none">
                                    <td class="icon">
                                        <img src="img/layout/snowmaking.svg" />
                                    </td>
                                    <td>Zasněžujeme</td>
                                    <td colspan="2"
                                        class="text-right">
                                        <span id="snowmaking"></span>
                                        <span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4"
                                        id="lastchange"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-lg-4 col-xl-4 quick-icons">
                        <div class="contain">
                            <div>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/libereckaboudakrkonose/"
                                            title="Odkaz na Facebook">
                                            <img src="img/layout/facebook.svg" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/channel/UCwzlYLxTBi_-aDx9sfrNbfg"
                                            title="Odkaz na YouTube">
                                            <img src="img/layout/youtube.svg" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact">
                                            <img src="img/layout/email.svg"
                                                title="Kontakt přes e-mail" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#webcams">
                                            <img src="img/layout/webcam.svg"
                                                title="Webkamery" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-xl-4">
                        <div class="weather-container-relative">
                            <div class="weather-card-container">
                                <div class="card weather">
                                    <a class="weatherwidget-io"
                                        href="https://forecast7.com/cs/50d6615d62/strazne/"
                                        data-label_1="LUISINO ÚDOLÍ"
                                        data-label_2="Počasí"
                                        data-font="Helvetica"
                                        data-days="5"
                                        data-theme="pure">
                                        LUISINO ÚDOLÍ Počasí
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <a class="page-anchor"
            id="areal">&nbsp;</a>
        <section class="page areal">
            <div class="container">
                <div class="row">
                    <h3>Lyžování</h3>
                    <div class="col-12 col-lg-6">
                        <p>
                            V areálu jsou k dispozici 2 vleky o délkách 500 m a 300 m s obtížností sjezdovek
                            střední a
                            lehká. Tým areálu za pomoci nejmodernější profesionální techniky a umělého
                            zasněžování
                            (záruka sněhu po celou zimní sezónu) se postará o ideální podmínky pro lyžování v
                            průběhu
                            celé lyžařské sezóny. Penzion Liberecká Bouda, která se nachází u horní stanice
                            vleku
                            poskytuje ubytovací, wellness a restaurační služby včetně venkovního Skibaru.
                            Liberecká
                            bouda je vybavena wellness částí sloužící i pro veřejnost. (bazén 10x5, vířivka a
                            sauna).
                        </p>
                        <p>
                            Parkoviště je u nás zcela ZDARMA pouhých pár desítek metrů od spodní stanice
                            lyžařského
                            vleku. Od sezóny 2018/19 Výuku lyžování a snowboardingu u nás zajišťuje
                            profesionální
                            lyžařská škola Mountain Rangers, která se kvalifikovaně postará o začínající i
                            zkušenější
                            lyžaře. Pro Vás i Vaše ratolesti pořádá škola nejen výuku, ale i doprovodný
                            program včetně
                            lyžařských závodů.
                        </p>
                        <p>
                            Pokud přijedete bez lyží, vybavíme Vás kompletně v naší půjčovně lyží a
                            snowboardů. K
                            zapůjčených lyžařským či snowboard kompletům zapůjčíme zdarma helmu či brýle.
                        </p>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div id="gallery"></div>
                    </div>
                </div>
            </div>
        </section>
        <a class="page-anchor"
            id="webcams">&nbsp;</a>
        <section class="page webcams">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Webkamery</h3>
                    </div>
                    <div class="col-12 col-md-9 d-none d-md-block">
                        <a class="webcam-main"
                            data-name="udoli"
                            data-link="https://www.libereckabouda.cz/kamera/ip-camera-lb-<cam_name>.jpg"><img
                                src="" /></a>
                    </div>
                    <div class="col-12 col-md-3 thumbnails">
                        <a class="webcam"
                            data-name="udoli"
                            role="button"><img src="" /></a>
                        <a class="webcam"
                            data-name="skibar"
                            role="button"><img src="" /></a>
                        <a class="webcam"
                            data-name="bouda"
                            role="button"><img src="" /></a>
                    </div>
                </div>
            </div>
            </div>
        </section>
        <a class="page-anchor"
            id="skimap">&nbsp;</a>
        <section class="page skimap">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Skimapa</h3>
                        <div class="skimap">
                            <div class="map"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <a class="page-anchor"
            id="prices">&nbsp;</a>
        <section class="page prices">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Ceník skipasů</h3>
                    </div>
                    <div class="col-xl-6">
                        <table class="table table-bordered table-hover">
                            <tbody>
                                <tr>
                                    <th>Denní jízdné</th>
                                    <th class="text-right">Dospělí</th>
                                    <th class="text-right">Děti do 12let</th>
                                </tr>
                                <tr>
                                    <td>Celodenní</td>
                                    <td>490</td>
                                    <td>380</td>
                                </tr>
                                <tr>
                                    <td>Dopolední 9:00-13:00</td>
                                    <td>390</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <td>Od 12:00</td>
                                    <td>420</td>
                                    <td>320</td>
                                </tr>
                                <tr>
                                    <td>Od 13:00</td>
                                    <td>390</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <td>Od 14:00</td>
                                    <td>360</td>
                                    <td>280</td>
                                </tr>
                                <tr>
                                    <td>1 hodina</td>
                                    <td>310</td>
                                    <td>240</td>
                                </tr>
                                <tr>
                                    <td>2 hodina</td>
                                    <td>350</td>
                                    <td>270</td>
                                </tr>
                                <tr>
                                    <td>3 hodina</td>
                                    <td>390</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <th colspan="3">Rodinná nabídka</th>
                                </tr>
                                <tr>
                                    <td colspan="2">Rodinná 2 dospělí + 1 dítě (1. dítě 250,-)</td>
                                    <td>1230</td>
                                </tr>
                                <tr>
                                    <td colspan="2">Rodinná 2 dospělí + 2 děti (2. dítě 200,-)</td>
                                    <td>1430</td>
                                </tr>
                                <tr>
                                    <th colspan="3">Školní skupiny</th>
                                </tr>
                                <tr>
                                    <td colspan="2">Školní skupiny (10 a více žáků) doprovod ZDARMA</td>
                                    <td>390</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-xl-6">
                        <table class="table table-bordered table-hover">
                            <tbody>
                                <tr>
                                    <th>Vícedenní jízdné</th>
                                    <th class="text-right">Dospělí</th>
                                    <th class="text-right">Děti do 12let</th>
                                </tr>
                                <tr>
                                    <td>2 denní</td>
                                    <td>920</td>
                                    <td>720</td>
                                </tr>
                                <tr>
                                    <td>3 denní</td>
                                    <td>1350</td>
                                    <td>1050</td>
                                </tr>
                                <tr>
                                    <td>4 denní</td>
                                    <td>1760</td>
                                    <td>1360</td>
                                </tr>
                                <tr>
                                    <td>5 denní</td>
                                    <td>2150</td>
                                    <td>1650</td>
                                </tr>
                                <tr>
                                    <td>6 denní</td>
                                    <td>2520</td>
                                    <td>1920</td>
                                </tr>
                                <tr>
                                    <td>7 denní</td>
                                    <td>2870</td>
                                    <td>2170</td>
                                </tr>
                                <tr>
                                    <th>Bodové jízdné</th>
                                    <th>Dospělí</th>
                                    <th>Děti do 12let</th>
                                </tr>
                                <tr>
                                    <td>10 bodů</td>
                                    <td>10</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>100 bodů</td>
                                    <td>100</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <th colspan="3">Odečet bodů</th>
                                </tr>
                                <tr>
                                    <td>POMA 300m</td>
                                    <td class="no-unit"
                                        colspan="2">30 bodů</td>
                                </tr>
                                <tr>
                                    <td>KOTVA 500m</td>
                                    <td class="no-unit"
                                        colspan="2">50 bodů</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-12">
                        <table class="table table-bordered table-hover">
                            <tbody>
                                <tr>
                                    <th colspan="2">Doplňující informace</th>
                                </tr>
                                <tr>
                                    <td colspan="2">Provozní doba je od 9:00 - 16:00, v únoru do 16:30</td>
                                </tr>
                                <tr>
                                    <td class=""
                                        colspan="2">Vratná záloha na čipovou kartu je 50,- Kč.</td>
                                </tr>
                                <tr>
                                    <td colspan="2">Děti se počítají do výšky 130cm nebo do 12-ti let.</td>
                                </tr>
                                <tr>
                                    <td colspan="2">Čipová karta lze kdykoli dobíjet novými body - minimální
                                        dobití je
                                        10 bodů.</td>
                                </tr>
                                <tr>
                                    <td colspan="2">Bodová nebo hodinová jízdenka platí po celou lyžařskou
                                        sezónu.</td>
                                </tr>
                                <tr>
                                    <td colspan="2">Skipas je u nás přenosný, například pro rodiče hlídající
                                        děti apod.
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">Na platnou kartu ISIC je 20% sleva při zakoupení
                                        celodenního
                                        skipasu.</td>
                                </tr>
                                <tr>
                                    <td colspan="2"
                                        class="cards">
                                        <span class="float-left">
                                            Příjímáme platební karty.
                                        </span>
                                        <img src="img/cards/visa.svg" />
                                        <img src="img/cards/mastercard.svg" />
                                        <img src="img/cards/maestro.svg" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        <a class="page-anchor"
            id="rental">&nbsp;</a>
        <section class="page rental prices">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Půjčovna</h3>
                        <table class="table table-bordered table-hover">
                            <tbody>
                                <tr>
                                    <th>Doba půjčení</th>
                                    <th class="w-25 text-right">Cena za komplet</th>
                                </tr>
                                <tr>
                                    <td>Dopoledne od 09:00 do 12:30</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <td>Odpoledne od 12:30 do 16:00</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <td>Celodenní</td>
                                    <td>370</td>
                                </tr>
                                <tr>
                                    <td>Vícedenní (cena za 1 den)</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <td>Půjčovné v rámci lyžařské školy (max 2 hodiny)</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <th colspan="2">Doplňující informace</th>
                                </tr>
                                <tr>
                                    <td colspan="2">K dispozici je kompletní vybavení na SNOWBOARD či LYŽE.
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">Nutný alespoň jeden doklad totožnosti.</td>
                                </tr>
                                <tr>
                                    <td colspan="2">Odpovědnost za nadměrné opotřebení, poškození či zrátu
                                        nese nájemce.
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">Helma a brýle k půjčenému setu je ZDARMA.</td>
                                </tr>
                                <tr>
                                    <th colspan="2">Kontakt</th>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <a
                                            href="mailto:pujcovna@skiareal-krkonose.cz?subject=Dotaz">pujcovna@skiareal-krkonose.cz</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">(+420) 722 901 501</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        <a class="page-anchor"
            id="school">&nbsp;</a>
        <section class="page school prices">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Lyžařská škola</h3>
                        <div class="row letter">
                            <div class="col-6 col-lg-3">
                                <img src="img/school/page1.jpg" />
                            </div>
                            <div class="col-6 col-lg-3">
                                <img src="img/school/page2.jpg" />
                            </div>
                            <div class="col-6 col-lg-3">
                                <img src="img/school/page3.jpg" />
                            </div>
                            <div class="col-6 col-lg-3">
                                <img src="img/school/page4.jpg" />
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-12">
                                <table class="table table-bordered table-hover">
                                    <tbody>
                                        <tr>
                                            <th>Osoby</th>
                                            <th class="text-right">Doba výuky</th>
                                            <th class="text-right">Cena</th>
                                        </tr>
                                        <tr>
                                            <td>Děti (výuka + skipas)</td>
                                            <td class="no-unit">1 hodina</td>
                                            <td>490</td>
                                        </tr>
                                        <tr>
                                            <td>Dospělí (výuka + skipas)</td>
                                            <td class="no-unit">1 hodina</td>
                                            <td>390</td>
                                        </tr>
                                        <tr>
                                            <td>Skupinová výuka</td>
                                            <td class="no-unit">1 hodina</td>
                                            <td class="no-unit">na dotaz</td>
                                        </tr>
                                        <tr>
                                            <td>Vícehodinová výuka</td>
                                            <td class="no-unit">min 2 hodiny</td>
                                            <td class="no-unit">sleva</td>
                                        </tr>
                                        <tr>
                                            <th colspan="3">Doplňující informace</th>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Lyžařskou školu zajišťuje organizace <b>Mountain Rangers</b> i
                                                s
                                                doprovodným programem pro děti.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Při zakoupení lyžařské školy je skipass ZDARMA + sleva v
                                                půjčovně lyží a
                                                snowboardů.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                Lyžařská škola pořádá doprovodný program včetně lyžařských
                                                závodů.
                                            </td>
                                        </tr>
                                        <tr>
                                            <th colspan="3">Kontakt</th>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <a href="mailto:skola@skiareal-krkonose.cz?subject=Dotaz">
                                                    skola@skiareal-krkonose.cz
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">(+420) 777 448 455</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <a class="page-anchor"
            id="map">&nbsp;</a>
        <section class="page map">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Kde nás najdete</h3>
                        <div class="mt-2"
                            id="map_container">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <a class="page-anchor"
            id="contact">&nbsp;</a>
        <section class="page contact">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Napište nám</h3>
                        <form id="contactForm"
                            method="post">
                            <div class="row">
                                <div class="col-12" />
                                <div class="form-group">
                                    <label for="nameInput">Jméno a příjmení</label>
                                    <input type="text"
                                        name="name"
                                        class="form-control"
                                        id="nameInput"
                                        placeholder=""
                                        required />
                                </div>
                                <div class="form-group">
                                    <label for="emailInput">Email</label>
                                    <input type="email"
                                        name="email"
                                        class="form-control"
                                        id="emailInput"
                                        placeholder=""
                                        required />
                                </div>
                                <div class="form-group">
                                    <label for="subjectSelect">Předmět zprávy</label>
                                    <input type="text"
                                        name="subject"
                                        class="form-control"
                                        id="subjectInput"
                                        placeholder=""
                                        required />
                                </div>
                                <div class="form-group">
                                    <label for="noteInput">Text</label>
                                    <textarea class="form-control"
                                        name="message"
                                        id="noteInput"
                                        placeholder="Co máte na srdci?"
                                        rows="5"></textarea>
                                </div>
                                <div class="form-group">
                                    <button type="submit"
                                        class="btn btn-primary btn-lg btn-block submit">
                                        Odeslat
                                    </button>
                                </div>
                            </div>
                    </div>
                    </form>
                </div>
            </div>
            </div>
        </section>
    </main>
    <footer class="footer container-fluid">
        <div class="row">
            <div class="col-md-4 fcontainer">
                <h5>Kontakt</h5>
                <ul>
                    <li>
                        <a href="mailto:info@skiareal-krkonose.cz?subject=Dotaz">info@skiareal-krkonose.cz</a>
                    </li>
                    <li>
                        <a href="http://www.skiareal-krkonose.cz">www.skiareal-krkonose.cz</a>
                    </li>
                    <li>Areál: (+420) 722 901 501</li>
                    <li>Lyžařská škola: (+420) 777 448 455</li>
                    <li>Půjčovna: (+420) 722 901 501</li>
                </ul>
                <div class="text-center text-lg-left">
                    <ul class="quick-icons">
                        <li>
                            <a href="https://www.facebook.com/libereckaboudakrkonose/">
                                <img src="img/layout/facebook.svg" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCwzlYLxTBi_-aDx9sfrNbfg">
                                <img src="img/layout/youtube.svg" />
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <img src="img/layout/email.svg" />
                            </a>
                        </li>
                        <li>
                            <a href="#webcams">
                                <img src="img/layout/webcam.svg" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4 fcontainer">
                <h5>Provozní doba</h5>
                <ul>
                    <li>9:00 - 16:00</li>
                    <li>v únoru 9:00 - 16:30</li>
                </ul>
                <div class="cards">
                    <img src="img/cards/visa.svg" />
                    <img src="img/cards/mastercard.svg" />
                    <img src="img/cards/maestro.svg" />
                </div>
            </div>
            <div class="col-md-4 fcontainer partners">
                <h5>Naši partneři</h5>
                <div>
                    <a class="lb"
                        href="http://www.libereckabouda.cz">
                        <img src="img/partners/lb.svg" />
                    </a>
                    <a class="lipa"
                        href="http://www.velkoobchodpapirem.cz">
                        <img src="img/partners/lipa.svg" />
                    </a>
                    <a class="pema"
                        href="http://www.velkoobchoddrogerie.cz">
                        <img src="img/partners/pema.svg" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
    <div id="modal-info"
        class="modal"
        tabindex="-1"
        role="dialog">
        <div class="modal-dialog"
            role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"></h5>
                    <button type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p class="modal-text"></p>
                </div>
                <div class="modal-footer">
                    <button type="button"
                        class="btn btn-primary"
                        data-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    <script src="assets/jquery-3.3.1.min.js"></script>
    <script src="assets/jquery-ui/jquery-ui.min.js"></script>
    <script src="assets/bootstrap.bundle.min.js"></script>
    <script src="assets/dnk-gallery/js/jquery.donkeyGallery.packed.min.js"></script>
    <script src="js/scroll.js"></script>
    <script src="js/map.js"></script>
    <script src="js/ski-info.js"></script>
    <script src="js/webcams.js"></script>
    <script src="js/navbar.js"></script>
    <script src="js/weather.io.js"></script>
    <script src="js/gallery.js"></script>
    <script src="js/contact-form.js"></script>
    <script src="js/message.js"></script>
    <?php if (!isDevSite()) : ?>
    <script src="https://maps.googleapis.com/maps/api/js?key=<?php echo $apikeys["map"]; ?>&callback=initMap"
        async
        defer></script>
    <script src="https://www.google.com/recaptcha/api.js?render=<?php echo $apikeys["captcha-client"]; ?>"
        async
        defer>
    </script>
    <?php endif; ?>
</body>

</html>