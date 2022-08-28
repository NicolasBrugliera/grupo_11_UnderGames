-- -----------------------------------------------------
-- Under Games insert de datos en Tablas
-- -----------------------------------------------------
-- Se inicializan las tablas paramétricas del sistema
-- 
-- Tablas que no se inicializan, porque se usará la aplicación web: 
-- 			undergames_db.users
-- 			undergames_db.games
-- 			
-- 
-- Los datos del carrito (undergames_db.cart), no se incializan, porque no se va a desarrollar el mismo. 
-- -----------------------------------------------------





INSERT INTO `undergames_db`.`category` (`category`)
VALUES
('Action'),
('Adventure'),
('Fight'),
('Idle'),
('Puzzle'),
('Role-playing'),
('Simulation'),
('Sports'),
('Strategy');

INSERT INTO  `undergames_db`.`game_group` (`game_group`)
VALUES
('New Releases'),
('Top Sellers'),
('Free');

INSERT INTO `undergames_db`.`platforms` (`platform_descr`)
VALUES
('Playstation Series & PC'),
('XBox Series & PC'),
('Nintendo Series & PC'),
('All Platforms');

INSERT INTO `undergames_db`.`graphics_min` (`graphics_min`)
VALUES
('Nvidia gtx 8XX'),
('Nvidia gtx 9XX'),
('Nvidia gtx 10XX'),
('Nvidia gtx 16XX'),
('Nvidia rtx 20XX'),
('Nvidia rtx 30XX'),
('Radeon RX 2XX'),
('Radeon RX 3XX'),
('Radeon RX 5XX'),
('Radeon RX 5XXX'),
('Radeon RX 6XXX');

INSERT INTO `undergames_db`.`graphics_rec` (`graphics_rec`)
VALUES
('Nvidia gtx 8XX'),
('Nvidia gtx 9XX'),
('Nvidia gtx 10XX'),
('Nvidia gtx 16XX'),
('Nvidia rtx 20XX'),
('Nvidia rtx 30XX'),
('Radeon RX 2XX'),
('Radeon RX 3XX'),
('Radeon RX 5XX'),
('Radeon RX 5XXX'),
('Radeon RX 6XXX');

INSERT INTO `undergames_db`.`processor_min` (`processor_min`)
VALUES
('Intel Pentium'),
('Intel Celeron'),
('Intel i3'),
('Intel i5'),
('Intel i7'),
('AMD Phenom'),
('AMD FX'),
('AMD Ryzen 3'),
('AMD Ryzen 5'),
('AMD Ryzen 7');

INSERT INTO `undergames_db`.`processor_rec` (`processor_rec`)
VALUES
('Intel Pentium'),
('Intel Celeron'),
('Intel i3'),
('Intel i5'),
('Intel i7'),
('AMD Phenom'),
('AMD FX'),
('AMD Ryzen 3'),
('AMD Ryzen 5'),
('AMD Ryzen 7');

INSERT INTO `undergames_db`.`os_min` (`os_min`)
VALUES
('Windows XP'),
('Windows Vista'),
('Windows 7'),
('Windows 10');

INSERT INTO `undergames_db`.`os_rec` (`os_rec`)
VALUES
('Windows XP'),
('Windows Vista'),
('Windows 7'),
('Windows 10');


INSERT INTO `undergames_db`.`storage_min` (`storage_min`)
VALUES
('2bg'),
('4gb'),
('8gb'),
('16gb'),
('24gb'),
('32gb');

INSERT INTO `undergames_db`.`storage_rec` (`storage_rec`)
VALUES
('2bg'),
('4gb'),
('8gb'),
('16gb'),
('24gb'),
('32gb');

INSERT INTO `undergames_db`.`creators` (`nickname`, `creator_avatar`)
VALUES
('Atari', '/images/creators/atari.png'),
('Bandai Namco', '/images/creators/bandai.jpg'), 
('CBS', '/images/creators/cbs.jpg'), 
('Dario Games', '/images/creators/darioGames.jpg'), 
('Dream Rift', '/images/creators/dreamRift.png'),
('EA', '/images/creators/ea.png'),
('Fullbright', '/images/creators/fullbright.png'),
('Games Hastra', '/images/creators/games_hastra.jpg'), 
('Justpig', '/images/creators/justpig.png'),
('Konami', '/images/creators/konami.png'),
('Lucas Film Games', '/images/creators/lucasfilm_Games.png'),
('MacPlay', '/images/creators/MacPlay.png'),
('Magical Hat', '/images/creators/magical_Hat.png'),
('Microsoft', '/images/creators/microsoft.png'),
('Microsoft  Game Studios', '/images/creators/microsoft_game_studios.png'),
('Mumbo Jumbo', '/images/creators/mumbo-jumbo.png'),
('Mystery Dungeon', '/images/creators/mystery_dungeon.png'),
('Nintendo', '/images/creators/nintendo.png'),
('Nitrome', '/images/creators/nitrome.png'),
('Pendorcho Games', '/images/creators/pendorcho.png'),
('Pokemon', '/images/creators/pokemon.png'),
('Pop Cap', '/images/creators/popcap.png'),
('Prime Gaming', '/images/creators/prime_gaming.png'),
('@Creator-01', '/images/creators/profile_01.png'),
('@Creator-02', '/images/creators/profile_02.png'),
('@Creator-03', '/images/creators/profile_03.gif'), 
('@Creator-04', '/images/creators/profile_04.jpg'), 
('@Creator-05', '/images/creators/profile_04.png'),
('@Creator-06', '/images/creators/profile_05.gif'), 
('@Creator-07', '/images/creators/profile_06.jpg'), 
('@Creator-08', '/images/creators/profile_07.jpg'), 
('Rockstar', '/images/creators/rockstar.png'),
('SNK', '/images/creators/SNK.png'),
('Sony', '/images/creators/sony.png'),
('Super Rare Games', '/images/creators/super_rare_games.png'),
('Ubisoft', '/images/creators/ubisoft.png'),
('Unity', '/images/creators/unity.png'),
('Winkysoft', '/images/creators/winkysoft.png'),
('Xbox', '/images/creators/xbox.jpg');




