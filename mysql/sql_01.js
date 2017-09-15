/**
 * SELECT * FROM 表名称
 * SELECT DISTINCT 列名称 FROM 表名称 (关键词 DISTINCT 用于返回唯一不同的值)
 * INSERT INTO table_name (列1, 列2,...) VALUES (值1, 值2,....)
 * UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
 * DELETE FROM 表名称 WHERE 列名称 = 值
 * 
 * 通配符
 * 	%				替代一个或多个字符
	_				仅替代一个字符
	[charlist]		字符列中的任何单一字符
	[^charlist]		不在字符列中的任何单一字符
 * 
 * 	IN 操作符允许我们在 WHERE 子句中规定多个值。
 * 	SELECT column_name(s)
	FROM table_name
	WHERE column_name IN (value1,value2,...)

	操作符 BETWEEN ... AND 会选取介于两个值之间的数据范围。这些值可以是数值、文本或者日期
	SELECT column_name(s)
	FROM table_name
	WHERE column_name
	BETWEEN value1 AND value2

	通过使用 SQL，可以为列名称和表名称指定别名（Alias）。

		表的 SQL Alias 语法
		SELECT column_name(s)
		FROM table_name
		AS alias_name

		列的 SQL Alias 语法
		SELECT column_name AS alias_name
		FROM table_name

	limit $startIdx,$qty
	返回表中数据 限定从排序下第 startIdx 开始  取 qty 条数据
 */