-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-10-2017 a las 21:39:20
-- Versión del servidor: 10.1.26-MariaDB
-- Versión de PHP: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crudext`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registromonitores`
--

CREATE TABLE `registromonitores` (
  `ID` int(11) NOT NULL,
  `NOMBRE` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `APELLIDO` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `PROGRAMA` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `SEMESTRE` int(10) NOT NULL,
  `CEDULA` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `INFORMACION` varchar(30) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registromonitorias`
--

CREATE TABLE `registromonitorias` (
  `ID` int(11) NOT NULL,
  `MATERIA` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `MONITOR` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `FECHA` date NOT NULL,
  `SALON` varchar(10) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `registromonitores`
--
ALTER TABLE `registromonitores`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `registromonitorias`
--
ALTER TABLE `registromonitorias`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `registromonitores`
--
ALTER TABLE `registromonitores`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `registromonitorias`
--
ALTER TABLE `registromonitorias`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
