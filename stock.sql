-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-06-22 05:54:12
-- 伺服器版本： 10.4.19-MariaDB
-- PHP 版本： 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `stock`
--

-- --------------------------------------------------------

--
-- 資料表結構 `stock`
--

CREATE TABLE `stock` (
  `id` varchar(8) NOT NULL,
  `name` varchar(8)  NOT NULL,
  `weight` varchar(20)  DEFAULT NULL,
  `numOfStock` varchar(20) DEFAULT NULL,
  `industry` varchar(300)  DEFAULT NULL,
  `intro` varchar(300)  DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `stock`
--

INSERT INTO `stock` (`id`, `name`, `weight`, `numOfStock`, `industry`, `intro`) VALUES
('2330', '台積電', '48.95', '142,806,538', 'IC生產 ，專業晶圓代工 ，IC製造', '台積電成立於1987年2月21日，是全球第一家也是全球最大的專業積體電路(IC)製造服務公司，公司經營策略為只提供客戶專業積體電路之製造技術服務，而不設計、生產、或銷售自有品牌產品，不與客戶做商品之競爭。\n\n公司在北美、歐洲、日本、中國大陸、南韓、印度等地均設有子公司或辦事處，產能亦來自海外子公司為WaferTech美國子公司、台積電（上海）有限公司，及新加坡合資SSMC公司之支援。\n\n公司首創建置資訊平台—虛擬晶圓廠(Virtual Fab)，提供整套服務，客戶也可從晶圓廠、封裝廠、到測試廠整個供應鏈掌握訂單進度。'),
('2454', '聯發科', '4.95', '8,797,495', 'DSL晶片組 ，無線網路IC ，衛星導航晶片組 ，數據機晶片組 ，CPU ，IC設計 ，網路通訊IC ，消費性IC ，光碟機驅動IC ，LCD控制IC ，影音IC ，數位電視IC ，手機晶片相關 ，手機零組件','鴻海精密工業股份有限公司(2317.TW)成立於1974年2月20日，公司初期以生產電視機旋扭起家，後跨入電腦連接器生產，於1991年6月掛牌上市，鴻海現已成為橫跨電腦、電視相關、行動電話、通訊網路、遊戲機、數位相機等3C電子產業，全球最大eCMMS(電子化-零元件、模組機光電垂直整合服務)廠。'),
('2317', '鴻海', '4.58', '70,969,207', '機器人 ，機械 ，車用電子 ，汽車內裝 ，連接器 ，電子零件元件 ，桌上型電腦 ，伺服器 ，筆記型電腦製造 ，顯示器 ，液晶電視 ，通訊設備 ，手機 ，手機製造 ，區域網路 ，視訊轉換相關 ，遊戲機 ，平板電腦 ，消費性電子產品 ，週邊產品 ，硬碟相關 ，電子書閱讀器 ，穿戴式裝置 ，電子製造服務 ，遊戲產業 ，電腦系統業', '聯發科技股份有限公司(2454.TW)成立於1997年5月28日，早期為聯電集團轉投資之半導體晶片設計公司，是無線通訊及數位媒體晶片整合系統方案之主要供應商，排名全球前十大半導體晶片廠，公司原為光儲存控制晶片製造商，後切入手機晶片製造，在數位電視產品蓬勃發展下，聯發科又投入數位電視控制IC的開發，並且成為市場龍頭。\n\n聯發科產品主要應用於光儲存、高解析度DVD、無線通訊、高解析度數位電視等領域。\n\n公司於2001年7月在台灣證券交易所掛牌上市，簡稱聯發科，代碼2454.TW。總部設於新竹，在中國大陸、新加坡、印度、日本、韓國、美國、丹麥、英國等地設有銷售及研發子公司。'),
('2308', '台達電', '2.2', '12,847,388', '車用充電相關 ，UPS ，機器人 ，機械 ，電力設備 ，汽機車零組件 ，車用電子 ，車用電池 ，LED ，LED照明產品 ，電源供應器 ，變壓器 ，無線充電 ，被動元件 ，晶片電阻 ，電感 ，其他電子零件 ，散熱風扇馬達 ，電子零件元件 ，散熱模組 ，顯示器 ，投影機 ，通訊設備 ，系統整合 ，軟體業 ，雲端科技 ，太陽能 ，PV Inverter', '台達電子工業有限公司成立於民國64年4月，生產電視線圈及電子零組件，公司以製造繞線式磁性元件起家，為全球磁性及散熱元件重要供應商。至民國64年8月20日改組為股份有限公司，並以此核心技術延伸發展生產電源供應器，成為全球最大交換式電源供應器廠商。\n\n2010年推出自有品牌，以加強全球競爭力；2012年8月，規劃轉型成系統整合解決方案業者，聚焦於綠能及雲端整合服務。'),
('2303', '聯電', '2.12', '69,293,408', '專業晶圓代工 ，IC製造', '聯電成立於1980年五月二十二日，為國內第一家上市的半導體公司，台灣僅次於台積電之晶圓專業代工公司。\n\n公司發展策略不同於台積電，以晶圓製造服務為後盾，轉投資諸多半導體晶片設計公司，以自有產能及技術扶植半導體晶片設計公司，而當半導體晶片設計公司之產品在市場中具競爭優勢取得需求量時，亦回饋公司，得以維持晶圓代工產能利用率，兩者相輔相成。集團內成功案例有聯陽、聯詠、聯傑、智原、原相、盛群與矽統等半導體晶片設計公司。'),
('2881', '富邦金', '1.83', '43,686,842', '銀行 ，壽險 ，產險 ，證券 ，投信 ，投資信託 ，金控 ，金融其他 ，資產管理 ，金融業', '富邦金(2881)成立於1961年，前身為富邦保險，2001年富邦金以股權讓與方式納入富邦產物保險股份有限公司，並以股權轉換方式併入富邦綜合證券股份有限公司、富邦商業銀行股份有限公司、及富邦人壽保險股份有限公司。同年年底富邦金控掛牌上市，為台灣第一家上市的金融控股公司。\n\n2002年富邦金持續以股權轉換方式併入富邦證券投資信託股份有限公司及台北銀行股份有限公司，其後又陸續併入富邦直效行銷顧問股份有限公司、富邦金控創業投資股份有限公司、香港港基國際銀行有限公司、富邦資產管理股份有限公司。公司旗下富邦產險為國內最大產險公司、富邦證券為國內前三大證券商，加上壽險、投信、及轉投資香港港基銀行。資產總額約新台幣3兆元，為台灣第二大上市金控公司。'),
('1301', '台塑', '1.77', '28,959,134', 'PVC ，PE ，PP ，AN ，石化業 ，亞克力棉 ，化纖原料 ，合成樹脂 ，EVA ，醋酸 ，化學工業 ，其他化工產品 ，傳產其他 ，複合材料','公司成立於民國43年，原名「福懋塑膠工業股份有限公司」，在高雄市設立聚氯乙烯(PVC)廠，主要經營業務為塑膠原料、塑膠加工、精密化學及纖維製品等等，是台灣最大的石化集團，也是台灣PVC粉的最大生產商。\n\n除塑膠及纖維原料之製銷外，集團內轉投資及交叉持股如台塑化(6505)、麥寮汽電公司、台塑美國公司、南亞(1303)、台化(1326)等轉投資事業，每年對公司獲利貢獻均有成長。'),
('1303', '南亞', '1.66', '33,577,473', 'DOP ，塑膠皮布 ，塑膠加工 ，PA ，石化業 ，聚酯絲 ，聚酯棉 ，紡織用聚酯粒 ，瓶用聚酯粒 ，化纖原料 ，EG ，合成樹脂 ，丁二醇 ，化學工業 ，玻纖布 ，銅箔基板 ，印刷電路板相關','南亞科技股份有限公司成立於中華民國八十四年三月四日，為DRAM（動態隨機存取記憶體）之研發、設計、製造與銷售商，於美國、歐洲、日本、中國設立海外行銷據點，最大股東為台塑集團之南亞塑膠工業股份有限公司。\n\n2012年Q4公司決定轉型，由標準型DRAM轉為利基型DRAM，專注產品研發，包含消費性及低功率產品的經營。\n\n公司將於2014年8月21日變更簡名為南亞科。'),
('2002', '中鋼', '1.61', '73,341,776', '鋼胚 ，熱軋鋼捲 ，線材、盤元 ，條鋼 ，冷軋鋼捲 ，鍍鋅鋼捲 ，棒鋼 ，鋼板 ，塗鍍鋼捲 ，板鋼', '成立於1971年12月3日，總部位於高雄市小港區，成立之初是政府十大建設之一，最大股東是經濟部，持股比例22.5%，為台灣最大、唯一具有高爐煉鋼廠和軋鋼一貫作業廠，總計高爐產能達1100萬噸，產品市佔率超過50%。'),
('2882', '國泰金', '1.56', '49,142,272', '銀行 ，壽險 ，產險 ，證券 ，投信 ，投資信託 ，金控 ，金融其他 ，資產管理 ，金融業', '國泰金控(2882)成立於2001年十二月，成立初期以國泰人壽為主體，並於2002年起逐步增加國泰銀及國泰世紀產險等子公司，擴大經營版圖，現已成為100%控有國泰世華銀行、國泰產險、國泰證券、第七商銀及2個創業投資公司及一個管理顧問公司的金融控股公司。\n\n國泰金近來期望擴充經營規模，國泰世華銀分行目標擴大到200家，國泰綜合證券期許擠進前10大券商。');

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
