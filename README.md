<h2>Testimisplaan</h2>

<p>Alljärgnev testimisplaan katab kogu To-Do rakenduse põhifunktsionaalsuse. Testimine on tehtud kasutades <strong>Jest</strong> ja <strong>React Testing Library</strong>. Lisaks on loogika funktsioonid testitud eraldi utiliidi tasemel.</p>

<table>
  <thead>
    <tr>
      <th>Testi nr</th>
      <th>Funktsionaalsus</th>
      <th>Miks testida</th>
      <th>Oodatav tulemus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><code>addTask</code> funktsioon</td>
      <td>Kontrollida, et uus ülesanne lisatakse õigesti</td>
      <td>Funktsioon tagastab uue ülesannete massiivi koos lisatud ülesandega</td>
    </tr>
    <tr>
      <td>2</td>
      <td><code>removeTask</code> funktsioon</td>
      <td>Kontrollida, et ülesanne eemaldatakse õigesti</td>
      <td>Funktsioon tagastab massiivi ilma eemaldatud ülesandeta</td>
    </tr>
    <tr>
      <td>3</td>
      <td><code>toggleTask</code> funktsioon</td>
      <td>Kontrollida, et ülesande <code>done</code> olek muutub</td>
      <td>Funktsioon muudab <code>done</code> väärtust vastupidiseks</td>
    </tr>
    <tr>
      <td>4</td>
      <td><code>TaskList</code> komponent</td>
      <td>Kontrollida, et kõik ülesanded kuvatakse</td>
      <td>Renderdatakse korrektne arv <code>&lt;li&gt;</code> elemente</td>
    </tr>
    <tr>
      <td>5</td>
      <td><code>AddTaskForm</code> komponent</td>
      <td>Kontrollida, et vorm töötab ja kutsub <code>onAdd</code> funktsiooni</td>
      <td>Formi <code>submit</code> käivitab <code>onAdd</code> ning tühjendab sisendi</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Veateated tühja sisendi korral</td>
      <td>Kontrollida, et tühja ülesande lisamisel kuvatakse hoiatus</td>
      <td>Kuvatakse hoiatustekst ja ülesanne ei lisandu</td>
    </tr>
  </tbody>
</table>

<p>Testfailid asuvad kaustas <code>/__tests__/</code> või komponentide kõrval. Kõik testid on käivitatavad käsuga <code>npm test</code>.</p>
