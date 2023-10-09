/******************
 * Html Verbindung
 *****************/
const a = document.getElementById("ausgabe");

a.innerHTML +=
    // table
    blockTag(
        "table",
        // tr
        blockTag(
            "tr",
            // th
            // 3 spalten
            blockTagArray("th", [
                blockTag("h3", "Titel H3") + ("h5", "Titel H5"),
                blockTag("h3", "Titel H3") + ("h5", "Titel H5"),
                blockTag("h3", "Titel H3") + ("h5", "Titel H5"),
            ])
        ) +
        // tr zeile 1
        blockTag(
            "tr",
            // td
            // zeile 1 spalte 1
            blockTag(
                "td",
                // img
                singleTagPlus("img", [
                    {
                        k1: "src",
                        k2: "https://cdn-icons-png.flaticon.com/128/742/742751.png",
                    },
                ]) +
                // hr
                singleTag("hr") +
                // paragraph
                blockTag("p", "Paragraph")
            ) +
            // td
            // zeile 1 spalte 2
            blockTag(
                "td",
                // select
                blockTag(
                    "select",
                    // 3 Optionen
                    blockTagArray("option", ["Option 1", "Option 2", "Option 3"])
                ) +
                // hr
                singleTag("hr") +
                // input
                // type text
                // placeholder
                singleTagPlus("input", [
                    {
                        k1: "type",
                        k2: "text",
                    },
                    {
                        k1: "placeholder",
                        k2: "Tippe was ein",
                    },
                ])
            ) +
            // td
            // zeile 1 spalte 3
            blockTag(
                "td",
                // label
                blockTag("label", "Das ist ein Label") +
                // hr
                singleTag("hr") +
                // textarea
                // placeholder
                // leerer parameter
                blockTagPlus(
                    "textarea",
                    [
                        {
                            k1: "placeholder",
                            k2: "schreibe einen Text",
                        },
                    ],
                    ""
                )
            )
        ) +
        // tr zeile 2
        blockTag(
            "tr",
            // td
            // zeile 2 spalte 1
            blockTag(
                "td",
                // div
                blockTag(
                    "div",
                    // ul
                    blockTag(
                        "ul",
                        // li
                        // img
                        //
                        bildUndText("li", [
                            {
                                bild: "https://cdn-icons-png.flaticon.com/128/1933/1933691.png",
                                text: blockTag("b", "Eintrag 1"),
                            },
                            {
                                bild: "https://cdn-icons-png.flaticon.com/128/1933/1933691.png",
                                text: blockTag("b", "Eintrag 2"),
                            },
                            {
                                bild: "https://cdn-icons-png.flaticon.com/128/1933/1933691.png",
                                text: blockTag("b", "Eintrag 3"),
                            },
                            {
                                bild: "https://cdn-icons-png.flaticon.com/128/1933/1933691.png",
                                text: blockTag("b", "Eintrag 4"),
                            },
                            {
                                bild: "https://cdn-icons-png.flaticon.com/128/1933/1933691.png",
                                text: blockTag("b", "Eintrag 5"),
                            },
                            {
                                bild: "https://cdn-icons-png.flaticon.com/128/1933/1933691.png",
                                text: blockTag("b", "Eintrag 3"),
                            },
                            {
                                bild: "https://cdn-icons-png.flaticon.com/128/1933/1933691.png",
                                text: blockTag("b", "Eintrag 4"),
                            },
                            {
                                bild: "https://cdn-icons-png.flaticon.com/128/1933/1933691.png",
                                text: blockTag("b", "Eintrag 5"),
                            },
                        ])
                    ) +
                    // ol
                    blockTag(
                        "ol",
                        // li
                        // img
                        //
                        bildUndText("li", [
                            {
                                bild: "https://cdn-icons-png.flaticon.com/128/1933/1933691.png",
                                text: blockTag("u", "Eintrag 1"),
                            },
                            {
                                bild: "https://cdn-icons-png.flaticon.com/128/1933/1933691.png",
                                text: blockTag("u", "Eintrag 2"),
                            },
                            {
                                bild: "https://cdn-icons-png.flaticon.com/128/1933/1933691.png",
                                text: blockTag("u", "Eintrag 3"),
                            },
                            {
                                bild: "https://cdn-icons-png.flaticon.com/128/1933/1933691.png",
                                text: blockTag("u", "Eintrag 4"),
                            },
                            {
                                bild: "https://cdn-icons-png.flaticon.com/128/1933/1933691.png",
                                text: blockTag("u", "Eintrag 5"),
                            },
                            {
                                bild: "https://cdn-icons-png.flaticon.com/128/1933/1933691.png",
                                text: blockTag("b", "Eintrag 3"),
                            },
                            {
                                bild: "https://cdn-icons-png.flaticon.com/128/1933/1933691.png",
                                text: blockTag("b", "Eintrag 4"),
                            },
                            {
                                bild: "https://cdn-icons-png.flaticon.com/128/1933/1933691.png",
                                text: blockTag("b", "Eintrag 5"),
                            },
                        ])
                    )
                )
            ) +
            // td
            // zeile 2 spalte 2
            blockTag(
                "td",
                singleTagPlus("img", [
                    {
                        k1: "src",
                        k2: "https://cdn-icons-png.flaticon.com/128/743/743267.png",
                    },
                ]) +
                singleTagPlus("img", [
                    {
                        k1: "src",
                        k2: "https://cdn-icons-png.flaticon.com/128/743/743267.png",
                    },
                ]) +
                singleTagPlus("img", [
                    {
                        k1: "src",
                        k2: "https://cdn-icons-png.flaticon.com/128/743/743267.png",
                    },
                ])
            ) +
            // td
            // zeile 2 spalte 3
            blockTag(
                "td",
                // dl
                blockTagArrayJ("dl", [
                    // dt
                    {
                        k1: "dt",
                        k2: "Beschreibung 1",
                    },
                    // 3 x dd
                    {
                        k1: "dd",
                        k2: "Eintrag 1",
                    },
                    {
                        k1: "dd",
                        k2: "Eintrag 2",
                    },
                    {
                        k1: "dd",
                        k2: "Eintrag 3",
                    },
                    // dt
                    {
                        k1: "dt",
                        k2: "Beschreibung 2",
                    },
                    // 3x dd
                    {
                        k1: "dd",
                        k2: "Eintrag 1",
                    },
                    {
                        k1: "dd",
                        k2: "Eintrag 2",
                    },
                    {
                        k1: "dd",
                        k2: "Eintrag 3",
                    },
                ])
            )
        ) +
        // tr zeile 3
        blockTag(
            "tr",
            // td zeile 3 spalte 1
            blockTag(
                "td",
                // select
                blockTag(
                    "select",
                    // 3 Optionen
                    blockTagArray("option", ["Option 1", "Option 2", "Option 3"])
                ) +
                // hr
                singleTag("hr") +
                // img
                singleTagPlus("img", [
                    {
                        k1: "src",
                        k2: "https://cdn-icons-png.flaticon.com/128/1791/1791294.png",
                    },
                ])
            ) +
            // td zeile 3 spalte 2
            blockTag(
                "td",
                // table
                blockTag(
                    "table",
                    // tr
                    blockTagArray("tr", [
                        // th 3 spalten
                        blockTagArray("th", ["Spalte 1", "Spalte 2", "Spalte 3"]),
                        // td 4 zeilen
                        blockTagArray("td", ["Zeile 1", "Zeile 1", "Zeile 1"]),
                        blockTagArray("td", ["Zeile 2", "Zeile 2", "Zeile 2"]),
                        blockTagArray("td", ["Zeile 3", "Zeile 3", "Zeile 3"]),
                        blockTagArray("td", ["Zeile 4", "Zeile 4", "Zeile 4"]),
                    ])
                )
            ) +
            // td zeile 3 spalte 3
            blockTag(
                "td",
                // label
                blockTag("laben", "Das ist ein Label") +
                // hr
                singleTag("hr") +
                // select
                blockTag(
                    "select",
                    // 3 optionen
                    blockTagArray("option", ["Option 1", "Option 2", "Option 3"])
                ) +
                // hr
                singleTag("hr") +
                // select
                blockTag(
                    "select",
                    // 3 optionen
                    blockTagArray("option", ["Option 1", "Option 2", "Option 3"])
                )
            )
        )
    );
