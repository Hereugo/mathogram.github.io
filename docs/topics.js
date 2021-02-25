
const topics = {
    "power-of-point":{
        author:"Нурмухамбетов М.",
        series:"Геометрия",
        title:"Степень Точки",
        preview:`Перед каждой задачей, дана теорема, которая поможет решить задачу. В каждой задаче и теореме, фигурирует что-то общее, что в итоге мы назовем степенью точки. Перед этим, попробуйте решить эти легкие теоремы и задачки, и заметить эту схожесть.`,
        content:[
            ["Задача 1.", "Точка $B$ лежит между точками $A$ и $C$. На отрезках $AB$ и $AC$ как на диаметрах построены окружности. К отрезку $AC$ в точке $B$ проведён перпендикуляр до пересечения с большей окружностью в точке $D$. Из точки $C$ проведена касательная $CE$ к меньшей окружности. Докажите, что $CD = CE$."],
            ["Задача 2.", "В треугольнике $ABC$ проведена биссектриса $AM$. Окружность, описанная около треугольника $ABM$, повторно пересекает $AC$ в точке $K$, а окружность, описанная около треугольника $AMC$, пересекает сторону $AB$ в точке $L$. Докажите, что $BL = KC$."],
            ["Задача 3.", "Через центр $O$ вписанной в треугольник $ABC$ окружности проведена прямая, перпендикулярная прямой $AO$ и пересекающая прямую $BC$ в точке $M$. Из точки $O$ на прямую $AM$ опущен перпендикуляр $OD$. Докажите, что точка $D$ лежит на описанной окружности треугольника $ABC$."],
            ["Задача 4.", "Дана окружность $ω$ радиуса $r$. На расстоянии $d$ от её центра отмечена точка $M$. Прямая $l$, проходящая через точку $M$, пересекает окружность в точках $A$ и $B$. Докажите, что произведение $MA \\cdot MB$ не зависит от выбора прямой $l$ и равно $\\abs{d^2 − r^2}$."],
            ["Задача 5.", "Даны отрезки $a$ и $b$ постройте отрезок $c=\\sqrt{ab}$."],
            ["Задача 6.", "$ABCD \\-$ равнобедренная трапеция $(BC \\parallel AD)$, $E \\-$ точка дуги $AD$ описанной окружности.  Из точек $A$ и $D$ опустили перпендикуляры на прямые $BE$ и $CE$. Докажите, что основания перпендикуляров лежат на одной окружности."],
            ["Задача 7.", "Выпуклый четырёхугольник $ABCD$ описан около окружности с центром в точке $I$. Докажите, что проекции точек $B$ и $D$ на прямые $IA$ и $IC$ лежат на одной окружности."],
            ["Задача 8.", "В любом треугольнике радиус $R$ описанной окружности, радиус $r$ вписанной окружности и расстояние $d$ между центрами этих окружностей связаны равенством $d^2 = R^2−2Rr$."],
        ]
    },
    "viet-theorem":{
        author:"Нурмухамбетов М.",
        series:"Алгебра, Многочлены",
        title:"Теорема Виета",
        preview:`Формулы Виета — формулы, связывающие коэффициенты многочлена и его корни. Этими формулами удобно пользоваться для проверки правильности нахождения корней многочлена, а также для составления многочлена по заданным корням. Эти тождества неявно присутствуют в работах Франсуа Виета.`,
        content:[
            ["Определения", `<strong>Определение.</strong> <i>Тождество</i> — равенство, выполняющееся для любых входящих в него переменных из области определения. Пример тождества $a^2-b^2 \\equiv (a-b)(a+b)$ так как оно выполняется для любых $a$ и $b$. Тождество обозначается как $\\equiv$.
			<br>
			<br>
			<strong>Определение.</strong> <i>Приведенный многочлен</i> - многочлен старший коэффициент, которого равен 1.`],
            ["Задача 2.", "Условие задачи 2"],
            ["Задача 3.", "Условие задачи 3"],
            ["Задача 4.", "Условие задачи 4"],
            ["Задача 5.", "Условие задачи 5"],
        ]
    },
    "euler-circle":{
        author:"Нурмухамбетов М.",
        series:"Геометрия",
        title:"Окружность Девяти Точек",
        preview:`Окружность девяти точек — это окружность, проходящая через середины всех трёх сторон треугольника.`,
        content:[
            ["Окружность девяти точек", `
Дан треугольник $ABC$ в котором
$H$ - ортоцентр, 
$G$ - центроид (точка пересечения медиан), 
$O$ - центр описанной окружности, 
$A_M, B_M, C_M$ - середины сторон, 
$A_H, B_H, C_H$ - основания высот, 
$A_1, B_1, C_1$ - середины отрезков от вершин до ортоцентра.
<br>

**Теорема (Окружность девяти точек).** Точки $A_M, B_M, C_M, A_H, B_H, C_H, A_1, B_1, C_1$ $\\-$ лежат на одной окружности.
< <img src="https://olymp.nomomon.repl.co/O9.svg">

			`],["Доказательство теоремы", `
			
1. Докажите, что $\\triangle{A_M B_M C_M}=\\triangle{A_1 B_1 C_1}$.

2. Докажите, что $A_1 B_1 A_M B_M$, $B_1 C_1 B_M C_M$, $C_1 A_1 C_M A_M$ $\\-$ прямоугольники.

3. Докажите, что точки $A_1, B_1, C_1$ и $A_M, B_M, C_M$ лежат на одной окружности.

4. Докажите теорему.

Отметим центр этой окружности как $O_9$.
			`],["Прямая Эйлера",`
5. Докажите, что $AH = 2 \\cdot OA_M$, $BH = 2 \\cdot OB_M$, $CH = 2 \\cdot OC_M$.

6. Докажите, что $G = AA_M \\cap OH$.

Таким образом, ортоцентр, центр описанной окружности и центроид треугольника лежат на одной прямой. Эта прямая называется *прямой Эйлера*.

7. Покажите, что $\\frac{OG}{GH}=\\frac{1}{2}$.

8. Докажите, что $O_9$ середина отрезка $OH$.

Теперь нетрудно заключить, что окружность девяти точек данного треугольника переходит в описанную окружность этого треугольника:
- при гомотетии относительно центроида с коэффициентом −2;
- при гомотетии относительно ортоцентра с коэффициентом 2.

Эти факты полезно иметь в виду при решении задач.
			`],['Задачи с олимпиад',`
Задачи расположены не в порядке сложности, а на абум пиу пип пиу пипуп ипиу

1. *(ГЖО 2015 кл.)* Высоты $AA_1$ и $BB_1$ треугольника $ABC$ пересекаются в точке $H$. Точки $X$ и $Y$ — середины отрезков $AB$ и $CH$ соответственно. Докажите, что $XY$ и $A_1B_1$ перпендикулярны. 
2. *(Респ. 2010 9кл.)* В треугольнике $ABC$ ($AB  <  BC$) точка $I$ — центр вписанной окружности, $M$ — середина стороны $AC$, $N$ — середина дуги $ABC$ описанной окружности. Докажите, что $\\angle IMA = \\angle INB$.
3. *(Обл. 2016 10кл.)* В треугольнике $ABC$ стороны $AB$ и $AC$ равны. Прямая, проходящая через вершину $A$, пересекает описанную около $ABC$ окружность вторично в точке $Z$, а окружность с центром $A$ и радиусом $AB$ — в точках $X$ и $Y$. Прямые $BX$ и $CY$ пересекаются в точке $P$. Докажите, что прямые $CX$, $BY$ и $PZ$ пересекаются в одной точке.
4. *(Респ. 2020 9кл.)* Вписанная окружность треугольника $ABC$ касается сторон $AB, BC, CA$ в точках $C_0, A_0, B_0$, соответственно. Пусть точка $M$ — середина отрезка, соединяющего вершину $C_0$ с точкой пересечения высот треугольника $A_0B_0C_0$, точка $N$ — середина дуги $ACB$ описанной окружности треугольника $ABC$. Докажите, что прямая $MN$ проходит через центр вписанной окружности треугольника $ABC$. 
5. *(Шарыгинская 2019 10-11кл)* Восстановите остроугольный треугольник $ABC$ по вершине $A$, основанию высоты, проведенной из вершины $B$ и центру окружности, описанной около треугольника $BHC$ (точка $H$ — ортоцентр треугольника $ABC$)
6. *(Респ. 2009 10кл.)* В треугольнике $ABC$ вписанная окружность касается сторон $BC$, $CA$ и $AB$ в точках $A_1$, $B_1$ и $C_1$ соответственно. Обозначим ортоцентр треугольника $A_1C_1B_1$ через $H_1$. Пусть  $I$ — центр вписанной, а $O$ — центр описанной окружности треугольника $ABC$. Докажите, что точки $I$, $O$ и $H_1$  лежат на одной прямой.

			`]
        ]
    },
	"divisers":{
        author:"Нурмухамбетов М.",
        series:"Теория Чисел",
        title:"Делители числа",
        preview:`Это типа заманчивое превью от которого хочется посмотреть подборку. Рассмотрим функции о делителях натуральных чисел.`,
        content:[
			["Количество делителей",`
Пусть $\\tau{(n)}$ $\\-$ количество натуральных делителей числа $n$. Пусть число $n$ имеет каноничный вид $p_1^{\\alpha_1}\\cdot p_2^{\\alpha_2}\\cdot ... \\cdot p_k^{\\alpha_k}$ (основная теорема арифметики), где $p_i$ различные простые числа, а $\\alpha_i$ их соответствующие степени вхождения в $n$.

1. Найдите $\\tau(p^m)$, где $p \\in \\P$, $m \\in \\N$.

2. Найдите $\\tau(p^mq^n)$, где $p \\ne q \\in \\P$, $m,n \\in \\N$.

3. Найдите $\\tau(n)$, для $n \\in \\N$.
			`],
			["Сумма делителей",`

Пусть $\\sigma{(n)}$ $\\-$ сумма натуральных делителей числа $n$. Как и в прошлой части, число $n$ имеет каноничный вид $p_1^{\\alpha_1}\\cdot p_2^{\\alpha_2}\\cdot ... \\cdot p_k^{\\alpha_k}$.

4. Найдите $\\sigma(p^m)$, где $p \\in \\P$, $m \\in \\N$.
5. Найдите $\\sigma(p^mq^n)$, где $p \\ne q \\in \\P$, $m,n \\in \\N$.
6. Найдите $\\sigma(n)$, для $n \\in \\N$.

			`],
			["Решения",`
1. 
<details>
<summary><i>Решение</i></summary>
Если у $p^m$ есть делитель, то он будет вида $p^i$, $0 \\le i \\le m$. Их всего $m+1$:
$$p^0, p^1, \\dots, p^m$$ 
</details>


2. <details>
<summary><i>Решение</i></summary>
Заметим, что любой делитель числа $p^mq^n$ имеет вид $p^kq^l$, где $0\\le k \\le m$ и $0 \\le l \\le n$. Тогда их будет $(m+1)(n+1)$:
$$\\begin{array}{c|c|c|c|c}
        & p^0      & p^1    & \\dots  & p^m \\\\ \\hline
  q^0   & p^0q^0   & p^1q^0 & \\dots  & p^mq^0\\\\ \\hline
  q^1   & p^0q^1   & p^1q^1 &        & \\\\ \\hline
  \\dots & \\dots    &        & \\ddots & \\\\ \\hline
  q^n   & p^0q^n   &        &        & p^mq^n
\\end{array}$$
</details>


3. <details>
<summary><i>Решение</i></summary>
Подумаем об этой задаче как о комбинаторной. Давайте возьмем $0 \\le \\beta_1 \\le \\alpha_1$ простого числа $p_1$, $0 \\le \\beta_2 \\le \\alpha_2$ простого числа $p_2$ и.т.д. Выбор количества простых чисел независимы, значит всего различных комбинаций:
$$(\\alpha_1 - 0 + 1)(\\alpha_2 - 0 + 1)\\dots(\\alpha_n - 0 + 1),$$
а если упростить
$$(\\alpha_1 + 1)(\\alpha_2 + 1)\\dots(\\alpha_n + 1).$$
Понятно, что произвидение чисел, которые выбрали дадут делитель числа $n$, а так же, таким образом мы можем собрать любой делитель числа $n$, причем единственным образом. Значит это и есть $\\tau(n)$.
</details>
			

4. <details>
<summary><i>Решение</i></summary>
Если у $p^m$ есть делитель, то он будет вида $p^i$, где $0 \\le i \\le m$. Тогда 
$$\\sigma(n) = p^0 + p^1 + \\dots +p^m$$
</details>


5. <details>
<summary><i>Решение</i></summary>
Заметим, что любой делитель числа $p^mq^n$ имеет вид $p^kq^l$, где $0\\le k \\le m$ и $0 \\le l \\le n$. Выпишем их в таблицу:
$$\\begin{array}{c|c|c|c|c}
        & p^0      & p^1    & \\dots  & p^m \\\\ \\hline
  q^0   & p^0q^0   & p^1q^0 & \\dots  & p^mq^0\\\\ \\hline
  q^1   & p^0q^1   & p^1q^1 &        & \\\\ \\hline
  \\dots & \\dots    &        & \\ddots & \\\\ \\hline
  q^n   & p^0q^n   &        &        & p^mq^n
\\end{array}$$
Тогда $$\\sigma(p^mq^n) = \\sum_{i=0}^{m} \\sum_{j=0}^{n} {p^iq^j}=$$
$$= p^0\\sum_{j=0}^{n}{q^j} + p^1\\sum_{j=0}^{n}{q^j} + \\dots + p^n\\sum_{j=0}^{n} {q^j}=$$
$$= \\sum_{i=0}^{m} {p^i} \\sum_{j=0}^{n} {q^j}$$
</details>


6. <details>
<summary><i>Решение в лоб.</i></summary>
Понятно, что
$$\\sigma(n) = \\sum_{i_1=0}^{\\alpha_1} \\sum_{i_2=0}^{\\alpha_2}\\dots \\sum_{i_k=0}^{\\alpha_k} {p_1^{i_1} p_2^{i_2} \\dots p_k^{i_k}}.$$
Повторив аналогично решению 2 получаем, что
$$\\sigma(n) = \\sum_{i_1=0}^{\\alpha_1}p_1^{i_1} \\sum_{i_2=0}^{\\alpha_2}p_2^{i_2} \\dots \\sum_{i_k=0}^{\\alpha_k} {p_k^{i_k}}.$$
</details>
			`]
		]
	}
}