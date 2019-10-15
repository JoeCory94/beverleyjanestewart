$(window).on('load', function() {
        if ($('.maincontentpaintings .page--title h1').text() == "Etchings & Drawings") {
            $('.paintinggrid a').eq(0).attr('href', '/etchings-drawings')
        }

        if ($('.maincontentpaintings .page--title h1').text() == "Visual Stories") {
            $('.paintinggrid a').eq(0).attr('href', '/visual-stories')
        }

        if ($('.maincontentpaintings .page--title h1').text() == "Jews in Prayer") {
            $('.paintinggrid a').eq(0).attr('href', '/jews-in-prayer')
        }

        if ($('.maincontentpaintings .page--title h1').text() == "London Life") {
            $('.paintinggrid a').eq(0).attr('href', '/london-life')
        }

        $('.imgzoom').imgViewer2();



        $('.imgoverlay').wrap('<div class="imgOverlayWrapper"></div>')
        $('.imgOverlayWrapper').append('<div id="svgframe"></div>')

        var id = $('.imgoverlay').attr('id')
        var classes = $('.imgoverlay').attr('class')
        var width = $('.imgzoom').width()
        var height = $('.imgzoom').height()

        $('.imgOverlayWrapper').addClass(classes)
        $('.imgOverlayWrapper').width(width)
        $('.imgOverlayWrapper').height(height)
        $('.imgOverlayWrapper').attr('id', id)

        $('.controlbox.interest').click(function() {
            $('.paintingInfoBox:not(.hide)').slideToggle(0)
            $('.paintinggrid').removeClass('hidePanel')
            $(window).trigger('resize');
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
                $('#ui-id-1').removeClass('mapHide')
                $('.imgoverlay').removeClass('showImg')
                $('.paintingpanel').removeClass('hideDesc')
            } else {
                $(this).addClass('active')
                $('#ui-id-1').addClass('mapHide')
                $('.imgoverlay').addClass('showImg')
                $('.paintingpanel').addClass('hideDesc')
            }
            window.dispatchEvent(new Event('resize'));
        });

        $('.controlbox.expand').click(function() {
            $('.paintingInfoBox:not(.hide)').slideToggle(300)
            $('.controlbox.interest').removeClass('active')
            $('#ui-id-1').removeClass('mapHide')
            $('.imgoverlay').removeClass('showImg')
            $(window).trigger('resize');
            window.dispatchEvent(new Event('resize'));
        });

        $('.paintingpanel').append('<div class="paintingInfoBox hide"></div>')

        $('.paintingInfoBox').slideToggle(0)

        $('#svgframe').html($('.maincontentpaintings .w-richtext').eq(1).text())
        $('.maincontentpaintings .w-richtext').eq(1).remove()

        $('#svgframe circle').click(function() {

                if ($('.paintingpanel h1').text() == "A Jewish Story of Remembrance in Alba Iulia") {
                    var id = $(this).parent().attr('id')
                    var text = $(this).parent().text()
                    if (id == "c1" || id == "c1_1_" || id == "c1_2_" || id == "c1_3_" || id == "c1_4_" || id == "c1_5_") {
                        $('.paintingInfoBox').text(text + '. ' + 'Modern Alba Iulia.')
                    } else if (id == "c2") {
                        $('.paintingInfoBox').text(text + '. ' + 'The Jewish cemetery.')
                    } else if (id == "c3") {
                        $('.paintingInfoBox').text(text + '. ' + 'The mausoleum (burial building) where the Gluck family members were burried.')
                    } else if (id == "c1h") {
                        $('.paintingInfoBox').text(text + '. ' + 'The old mills owned by the Gluck family, now gone.')
                    } else if (id == "c2h") {
                        $('.paintingInfoBox').text(text + '. ' + 'Gisella Palace owned and lived by the Gluck family. Now a shopping parade.')
                    } else if (id == "c3h") {
                        $('.paintingInfoBox').text(text + '. ' + 'The main synagogue now restored.')
                    }
                }

                if ($('.paintingpanel h1').text() == "Timisoara") {
                    var id = $(this).parent().attr('id')
                    var text = $(this).parent().text()
                    if (id == "c1h") {
                        $('.paintingInfoBox').text(text + '. ' + 'The map illustrating the route Jews took on leaving Spain in 1492 and arriving in Moldovia, where they travelled across to the province of Temesvar under Hungarian rule. This area is now called Timisoara and joined Romania in 1918 as part of the unification.')
                    } else if (id == "c2h") {
                        $('.paintingInfoBox').text(text + '. ' + 'Inside The Cetate Synagogue, the old streets and Opera House. The grand life where Jews lived, worked establishing shops, businesses and immersed themselves into the location and culture of the area.')
                    } else if (id == "c3h") {
                        $('.paintingInfoBox').text(text + '. ' + 'The old grand houses.')
                    } else if (id == "c4h") {
                        $('.paintingInfoBox').text(text + '. ' + 'Inside the Fabric Synagogue.')
                    } else if (id == "c5h") {
                        $('.paintingInfoBox').text(text + '. ' + 'In Victoria Square, facing the Orthodox Cathedral and directly adjacent to the Opera House the 1989 popular uprising against the Communist Regime.')
                    } else if (id == "c6h") {
                        $('.paintingInfoBox').text(text + '. ' + 'Looser District. Jewish food shops, traders and homes were established in this more industrial area along the Banat canal. ')
                    } else if (id == "c7h") {
                        $('.paintingInfoBox').text(text + '. ' + 'Timisoara hosted the first Beer factory.  Jews  were often connected to the alcohol industry providing grains for the distillery which were traded through Poland and Russia. It was believed the brewery was originally owned by Jews.')
                    } else if (id == "c8h") {
                        $('.paintingInfoBox').text(text + '. ' + 'History of Timisoara- wars from Romans, Middle Ages, Ottoman rulers, the Habsburg, 1848/49 revolution to 1918 Unification of Romania.  Boundaries were constantly changed.')
                    } else if (id == "c1") {
                        $('.paintingInfoBox').text(text + '. ' + 'Unirii Square - celebrating 2021 EU Festival of Culture.')
                    } else if (id == "c2a" || id == "c2h_1_") {
                        $('.paintingInfoBox').text(text + '. ' + 'The Cetate Synagogue and neighbouring building, now used as a Jewish Community Centre. Originally many Jews lived in this location. ')
                    } else if (id == "c3") {
                        $('.paintingInfoBox').text(text + '. ' + 'Modern Timisoara where the celebrations continue. ')
                    } else if (id == "c4") {
                        $('.paintingInfoBox').text(text + '. ' + 'Fabric Synagogue- exterior.')
                    } else if (id == "c5") {
                        $('.paintingInfoBox').text(text + '. ' + 'Victoria Square shops, Orthodox Cathedral, Polytechnic (once a trading house where many Jews officiated their businesses). ')
                    } else if (id == "c6") {
                        $('.paintingInfoBox').text(text + '. ' + 'Brewery now a modern Restaurant.')
                    } else if (id == "c7") {
                        $('.paintingInfoBox').text(text + '. ' + 'Modern Timisoara situated by Fabric Synagogue.')
                    } else if (id == "c8") {
                        $('.paintingInfoBox').text(text + '. ' + 'Industrial site of Losefin District. by the Banat Canal and situated by the Losefin Synagogue where services are still held. Dilapidated this was once a flourishing area for Jewish life for the less affluent. ')
                    } else if (id == "c9") {
                        $('.paintingInfoBox').text(text + '. ' + 'Jewish Cemetery. ')
                    }
                }
                
                if ($('.paintingpanel h1').text() == "Liberal Synagogue") {
                    var id = $(this).parent().attr('id')
                    var text = $(this).parent().text()
                    console.log(id, text)
                    if (id == "c1a") {
                        $('.paintingInfoBox').text(text + '. ' + 'In the foyer, The Holocaust Memorial Stone by artist Anish Kapoor, mirrors a small glimmer of light with the words below written on the floor. The above image reflects the human suffering inflicted by the concentration camps of WW11.')
                    }  else if (id == "_1b") {
                        $('.paintingInfoBox').text(text + '. ' + 'An imaginative scene where the stone is broken, unable to break the Jewish spirit, the flame, like the Jewish heart, expands throwing light on a variety of Jewish customs. ')
                    }  else if (id == "_2") {
                        $('.paintingInfoBox').text(text + '. ' + "The outside of the synagogue showing the original 1920's listed frontage")
                    }  else if (id == "_3a") {
                        $('.paintingInfoBox').text(text + '. ' + "Small exerts from the large mural by Utermohlen on 'The Pilgrim Festivals' which is displayed by the regular entrance at the back of the building. The theme linked well with the 'Harvest feast or the Jewish tabernacle festival.")
                    }  else if (id == "_3b") {
                        $('.paintingInfoBox').text(text + '. ' + "Small exerts from the large mural by Utermohlen on 'The Pilgrim Festivals' which is displayed by the regular entrance at the back of the building. The theme linked well with the 'Harvest feast or the Jewish tabernacle festival.")
                    }  else if (id == "_3c") {
                        $('.paintingInfoBox').text(text + '. ' + "Small exerts from the large mural by Utermohlen on 'The Pilgrim Festivals' which is displayed by the regular entrance at the back of the building. The theme linked well with the 'Harvest feast or the Jewish tabernacle festival.")
                    }  else if (id == "_4") {
                        $('.paintingInfoBox').text(text + '. ' + 'After the service the congregation amalgamate into the Sukkot (a temporary building decorated with foliage), to celebrate with a glass of wine, cake and fruit.')
                    }  else if (id == "_5") {
                        $('.paintingInfoBox').text(text + '. ' + 'The Sanctuary (the prayer hall) where the organ plays, the choir sings, luluvs *1 are shaken and beautiful fruits are displayed.')
                    } 
                }

                if ($('.paintingpanel h1').text() == "A Jewish Historical Arrival in Alba Iulia") {
                    var id = $(this).parent().attr('id')
                    var text = $(this).parent().text()
                    if (id == "c1h") {
                        $('.paintingInfoBox').text(text + '. ' + 'The destruction of the second temple between 516 BE-70CE by the Romans and the dispersion of the Jews from Jerusalem.')
                    } else if (id == "c2h" || id == "c2h_1_" || id == "c2h_2_") {
                        $('.paintingInfoBox').text(text + '. ' + 'The Diaspora  Jews constantly roaming.')
                    } else if (id == "c3h") {
                        $('.paintingInfoBox').text(text + '. ' + 'The expulsion of the Jews from Spain in 1492.')
                    } else if (id == "c4h") {
                        $('.paintingInfoBox').text(text + '. ' + 'The Jews arriving at the Ottoman Empire (where they were welcomed) and starting to trade.')
                    } else if (id == "c5h") {
                        $('.paintingInfoBox').text(text + '. ' + 'Jews leaving Turkey and travelling to Transylvania. Here Prince Gabriel encouraged Jews to settle in the area in order to improve economical growth. ')
                    } else if (id == "c6h") {
                        $('.paintingInfoBox').text(text + '. ' + 'Old Alba Iulia, where the Jews would have lived, amongst the mills and shops.')
                    } else if (id == "c7h") {
                        $('.paintingInfoBox').text(text + '. ' + 'Old wealthy homes situated near the synagogue.')
                    } else if (id == "c8h") {
                        $('.paintingInfoBox').text(text + '. ' + 'Old Gisella Palace - the home of the Jewish Gluck family, who made their wealth from establishing mills in the area. These have now gone though the Palace remains.')
                    } else if (id == "c1") {
                        $('.paintingInfoBox').text(text + '. ' + 'Present homes where the Jews once lived.')
                    } else if (id == "c2") {
                        $('.paintingInfoBox').text(text + '. ' + 'Modern flats.')
                    } else if (id == "c3") {
                        $('.paintingInfoBox').text(text + '. ' + 'The restored synagogue built in 1840.')
                    } else if (id == "c4") {
                        $('.paintingInfoBox').text(text + '. ' + 'Modern Palace Gisella (now shopping venue) with flats and hotels behind.')
                    } else if (id == "c5") {
                        $('.paintingInfoBox').text(text + '. ' + 'The citadel. Home of the Romans, Habsburg Empire and later the unification of Romania.  A military site which also houses The Roman-Catholic Cathedral and Orthodox Cathedral (which was built for the royal coronation).')
                    } else if (id == "c6") {
                        $('.paintingInfoBox').text(text + '. ' + 'Today most Jews have left the area, travelling to Israel and other locations.')
                    }
                }

                if ($('.paintingpanel h1').text() == "Peddling to Prayer - Plymouth") {
                    var id = $(this).parent().attr('id')
                    var text = $(this).parent().text()
                    if (id == "_1") {
                        $('.paintingInfoBox').text(text + '. ' + 'Jewish Pedlars trading on the ships.')
                    } else if (id == "_2") {
                        $('.paintingInfoBox').text(text + '. ' + 'Sailors collecting their Prize Money.')
                    } else if (id == "_3") {
                        $('.paintingInfoBox').text(text + '. ' + 'Docks in eighteen century Plymouth.')
                    } else if (id == "_4") {
                        $('.paintingInfoBox').text(text + '. ' + 'Modern Plymouth.')
                    } else if (id == "_5") {
                        $('.paintingInfoBox').text(text + '. ' + 'Modern Plymouth.')
                    } else if (id == "_6") {
                        $('.paintingInfoBox').text(text + '. ' + 'Plymouth Synagogue.')
                    } else if (id == "_7") {
                        $('.paintingInfoBox').text(text + '. ' + 'N/A')
                    } else if (id == "_8") {
                        $('.paintingInfoBox').text(text + '. ' + 'N/A')
                    } else if (id == "_9") {
                        $('.paintingInfoBox').text(text + '. ' + 'N/A')
                    } else if (id == "_10") {
                        $('.paintingInfoBox').text(text + '. ' + 'N/A')
                    } else if (id == "_11") {
                        $('.paintingInfoBox').text(text + '. ' + 'N/A')
                    } else if (id == "_12") {
                        $('.paintingInfoBox').text(text + '. ' + 'N/A')
                    }
                }

                if ($('.paintingpanel h1').text() == "Balfour Accomplished in black & white") {
                    var id = $(this).parent().attr('id')
                    var text = $(this).parent().text()
                    if (id == "c1") {
                        $('.paintingInfoBox').text(text + '. ' + 'Safed - Abuhav and Ari Ashkenazi Synagogue, old turkish synagogues & cobbled streets.')
                    } else if (id == "c2") {
                        $('.paintingInfoBox').text(text + '. ' + 'Hurva Synagogue Jerusalem, which was open to Jewish soldiers during the mandate (past and present).')
                    } else if (id == "c3") {
                        $('.paintingInfoBox').text(text + '. ' + 'Arthur Balfour opening Hebrew University, 1925 on Mount Scopus.')
                    } else if (id == "c4") {
                        $('.paintingInfoBox').text(text + '. ' + ' Hall of Names on The Flame of Remembrance at Yad Vashem.')
                    } else if (id == "c5") {
                        $('.paintingInfoBox').text(text + '. ' + 'The global persecution of the Jewish people.')
                    } else if (id == "c6") {
                        $('.paintingInfoBox').text(text + '. ' + 'Jerusalem in the past - Police headquarters bombed in the mandate, currently the King David Hotel.')
                    } else if (id == "c7") {
                        $('.paintingInfoBox').text(text + '. ' + 'Modern Jerusalem - Knesset, Mamilla, Jerusalem light railway.')
                    } else if (id == "c8") {
                        $('.paintingInfoBox').text(text + '. ' + ' Kibbutz - Past and present.')
                    } else if (id == "c9") {
                        $('.paintingInfoBox').text(text + '. ' + 'Tabernacle Festival (Sukkot).')
                    } else if (id == "c10") {
                        $('.paintingInfoBox').text(text + '. ' + 'Tel Aviv and Jaffa (past and present).')
                    } else if (id == "c11") {
                        $('.paintingInfoBox').text(text + '. ' + 'New West End Synagogue, St Petersburgh Place, London. Members: Chaim Weizmann & 1st Viscount HErbert Samuel.')
                    } else if (id == "c12") {
                        $('.paintingInfoBox').text(text + '. ' + 'Houses of Parliament, London.')
                    } else if (id == "c13") {
                        $('.paintingInfoBox').text(text + '. ' + 'Weizmann Institute, Israel.')
                    } else if (id == "c14") {
                        $('.paintingInfoBox').text(text + '. ' + 'Hall of Independence, Tel Aviv, historic landmark.')
                    } else if (id == "c15") {
                        $('.paintingInfoBox').text(text + '. ' + 'Modern Haifa - The tolerance of multi faiths, High Tech PArks, docks and the unions.')
                    } else if (id == "c16") {
                        $('.paintingInfoBox').text(text + '. ' + 'Balfour Declaration Letter.')
                    } else if (id == "c17") {
                        $('.paintingInfoBox').text(text + '. ' + 'Arthur Balfour, Foreign Secretary with Lord Walter Rothschild receiving The Balfour letter.')
                    } else if (id == "c18") {
                        $('.paintingInfoBox').text(text + '. ' + 'Chaim Weizmann - In the labratory, where he discovered and used the bacterial quality of Acetone for use as an explosive during World War 1.')
                    } else if (id == "c19") {
                        $('.paintingInfoBox').text(text + '. ' + 'Romans destroying 2nd Temple in 70 CE.')
                    } else if (id == "c20") {
                        $('.paintingInfoBox').text(text + '. ' + 'World War 1.')
                    } else if (id == "c21") {
                        $('.paintingInfoBox').text(text + '. ' + 'General Allenby arriving at the Jaffa Gates, first riding an then walking, December, 2017.')
                    } else if (id == "c22") {
                        $('.paintingInfoBox').text(text + '. ' + 'Turks fighting the British in World War 1.')
                    } else if (id == "c23") {
                        $('.paintingInfoBox').text(text + '. ' + 'British defending Suez Canal.')
                    } else if (id == "c24") {
                        $('.paintingInfoBox').text(text + '. ' + 'Big Ben clock part of The Houses of Parliament, London.')
                    }
                }

                if ($('.paintingpanel h1').text() == "Balfour Accomplished") {
                    var id = $(this).parent().attr('id')
                    var text = $(this).parent().text()
                    if (id == "c1") {
                        $('.paintingInfoBox').text(text + '. ' + 'Safed - Abuhav and Ari Ashkenazi Synagogue, old turkish synagogues & cobbled streets.')
                    } else if (id == "c2") {
                        $('.paintingInfoBox').text(text + '. ' + 'Hurva Synagogue Jerusalem, which was open to Jewish soldiers during the mandate (past and present).')
                    } else if (id == "c3") {
                        $('.paintingInfoBox').text(text + '. ' + 'Arthur Balfour opening Hebrew University, 1925 on Mount Scopus.')
                    } else if (id == "c4") {
                        $('.paintingInfoBox').text(text + '. ' + ' Hall of Names on The Flame of Remembrance at Yad Vashem.')
                    } else if (id == "c5") {
                        $('.paintingInfoBox').text(text + '. ' + 'The global persecution of the Jewish people.')
                    } else if (id == "c6") {
                        $('.paintingInfoBox').text(text + '. ' + 'Jerusalem in the past - Police headquarters bombed in the mandate, currently the King David Hotel.')
                    } else if (id == "c7") {
                        $('.paintingInfoBox').text(text + '. ' + 'Modern Jerusalem - Knesset, Mamilla, Jerusalem light railway.')
                    } else if (id == "c8") {
                        $('.paintingInfoBox').text(text + '. ' + ' Kibbutz - Past and present.')
                    } else if (id == "c9") {
                        $('.paintingInfoBox').text(text + '. ' + 'Tabernacle Festival (Sukkot).')
                    } else if (id == "c10") {
                        $('.paintingInfoBox').text(text + '. ' + 'Tel Aviv and Jaffa (past and present).')
                    } else if (id == "c11") {
                        $('.paintingInfoBox').text(text + '. ' + 'New West End Synagogue, St Petersburgh Place, London. Members: Chaim Weizmann & 1st Viscount HErbert Samuel.')
                    } else if (id == "c12") {
                        $('.paintingInfoBox').text(text + '. ' + 'Houses of Parliament, London.')
                    } else if (id == "c13") {
                        $('.paintingInfoBox').text(text + '. ' + 'Weizmann Institute, Israel.')
                    } else if (id == "c14") {
                        $('.paintingInfoBox').text(text + '. ' + 'Hall of Independence, Tel Aviv, historic landmark.')
                    } else if (id == "c15") {
                        $('.paintingInfoBox').text(text + '. ' + 'Modern Haifa - The tolerance of multi faiths, High Tech PArks, docks and the unions.')
                    } else if (id == "c16") {
                        $('.paintingInfoBox').text(text + '. ' + 'Balfour Declaration Letter.')
                    } else if (id == "c17") {
                        $('.paintingInfoBox').text(text + '. ' + 'Arthur Balfour, Foreign Secretary with Lord Walter Rothschild receiving The Balfour letter.')
                    } else if (id == "c18") {
                        $('.paintingInfoBox').text(text + '. ' + 'Chaim Weizmann - In the labratory, where he discovered and used the bacterial quality of Acetone for use as an explosive during World War 1.')
                    } else if (id == "c19") {
                        $('.paintingInfoBox').text(text + '. ' + 'Romans destroying 2nd Temple in 70 CE.')
                    } else if (id == "c20") {
                        $('.paintingInfoBox').text(text + '. ' + 'World War 1.')
                    } else if (id == "c21") {
                        $('.paintingInfoBox').text(text + '. ' + 'General Allenby arriving at the Jaffa Gates, first riding an then walking, December, 2017.')
                    } else if (id == "c22") {
                        $('.paintingInfoBox').text(text + '. ' + 'Turks fighting the British in World War 1.')
                    } else if (id == "c23") {
                        $('.paintingInfoBox').text(text + '. ' + 'British defending Suez Canal.')
                    } else if (id == "c24") {
                        $('.paintingInfoBox').text(text + '. ' + 'Big Ben clock part of The Houses of Parliament, London.')
                    }
                }

                if ($('.paintingpanel h1').text() == "The Story of the East End, London") {
                    var id = $(this).parent().attr('id')
                    var text = $(this).parent().text()
                    if (id == "c1") {
                        $('.paintingInfoBox').text(text + '. ' + 'Active synagogues at time of painting.')
                    } else if (id == "c2") {
                        $('.paintingInfoBox').text(text + '. ' + 'Active synagogues at time of painting.')
                    } else if (id == "c3") {
                        $('.paintingInfoBox').text(text + '. ' + 'Active synagogues at time of painting.')
                    } else if (id == "c4") {
                        $('.paintingInfoBox').text(text + '. ' + 'Active synagogues at time of painting.')
                    } else if (id == "c5a") {
                        $('.paintingInfoBox').text(text + '. ' + 'Petticoat Lane, past & present.')
                    } else if (id == "c5b") {
                        $('.paintingInfoBox').text(text + '. ' + 'Petticoat Lane, past & present.')
                    } else if (id == "c6") {
                        $('.paintingInfoBox').text(text + '. ' + 'Yiddish Theatre.')
                    } else if (id == "c7") {
                        $('.paintingInfoBox').text(text + '. ' + 'Tower Bridge and arrival of immigrants.')
                    } else if (id == "c8") {
                        $('.paintingInfoBox').text(text + '. ' + 'Brick Lane and present Art colony.')
                    } else if (id == "c9") {
                        $('.paintingInfoBox').text(text + '. ' + 'Chagal�s painting')
                    } else if (id == "c10") {
                        $('.paintingInfoBox').text(text + '. ' + 'Wandering Jew.')
                    }
                }

                if ($('.paintingpanel h1').text() == "Leeds Past to Present") {
                    var id = $(this).parent().attr('id')
                    var text = $(this).parent().text()
                    if (id == "_1") {
                        $('.paintingInfoBox').text(text + '. ' + 'Jews coming from Eastern Europe.')
                    } else if (id == "_2") {
                        $('.paintingInfoBox').text(text + '. ' + 'Arriving from boat and then train.')
                    } else if (id == "_3") {
                        $('.paintingInfoBox').text(text + '. ' + 'Leylands (Leeds slums).')
                    } else if (id == "_4") {
                        $('.paintingInfoBox').text(text + '. ' + 'Chapel Town Synagogue now replaced by City Loop now the Northern Contemporary Dance School.')
                    } else if (id == "_5") {
                        $('.paintingInfoBox').text(text + '. ' + 'Present Chapel Town Community.')
                    } else if (id == "_6") {
                        $('.paintingInfoBox').text(text + '. ' + 'Nelson Mandella Community Centre.')
                    } else if (id == "_7a") {
                        $('.paintingInfoBox').text(text + '. ' + 'Synagogues.')
                    } else if (id == "_7b") {
                        $('.paintingInfoBox').text(text + '. ' + 'Synagogues.')
                    } else if (id == "_7c") {
                        $('.paintingInfoBox').text(text + '. ' + 'Synagogues.')
                    } else if (id == "_7d") {
                        $('.paintingInfoBox').text(text + '. ' + 'Synagogues.')
                    } else if (id == "_7e") {
                        $('.paintingInfoBox').text(text + '. ' + 'Synagogues.')
                    } else if (id == "_7f") {
                        $('.paintingInfoBox').text(text + '. ' + 'Synagogues.')
                    } else if (id == "_8") {
                        $('.paintingInfoBox').text(text + '. ' + 'Ziff Community Centre in Moortown & Alwoodley, Leeds.')
                    } else if (id == "_9") {
                        $('.paintingInfoBox').text(text + '. ' + 'Jewish Schools.')
                    }
                }

                if ($('.paintingpanel h1').text() == "Chatham Synagogue") {
                    var id = $(this).parent().attr('id')
                    var text = $(this).parent().text()
                    if (id == "_1") {
                        $('.paintingInfoBox').text(text + '. ' + 'Stained glass windows.')
                    } else if (id == "_2") {
                        $('.paintingInfoBox').text(text + '. ' + 'Rear interior of the prayer hall.')
                    } else if (id == "_3") {
                        $('.paintingInfoBox').text(text + '. ' + 'Memorial plaque.')
                    } else if (id == "_4") {
                        $('.paintingInfoBox').text(text + '. ' + 'Holocaust window.')
                    } else if (id == "_5") {
                        $('.paintingInfoBox').text(text + '. ' + 'Synagogue exterior.')
                    } else if (id == "_5a") {
                        $('.paintingInfoBox').text(text + '. ' + 'Chatham Jewish Cemetery.')
                    }
                }

                if ($('.paintingpanel h1').text() == "Legacy of Leeds") {
                    var id = $(this).parent().attr('id')
                    var text = $(this).parent().text()
                    if (id == "c1") {
                        $('.paintingInfoBox').text(text + '. ' + 'Hasidim in dance and prayer.')
                    } else if (id == "c2") {
                        $('.paintingInfoBox').text(text + '. ' + 'The foundation stone of Chapeltown Road, New Synagogue.')
                    } else if (id == "c3") {
                        $('.paintingInfoBox').text(text + '. ' + "The statue of the letter 'c' with the Mandela Community Centre poster, welcomes people to Chapeltown.")
                    } else if (id == "c4") {
                        $('.paintingInfoBox').text(text + '. ' + 'Chapeltown Road, New Synagogue (now defunct).')
                    } else if (id == "c4a") {
                        $('.paintingInfoBox').text(text + '. ' + 'Painted shop shutter.')
                    } else if (id == "c4b") {
                        $('.paintingInfoBox').text(text + '. ' + 'The external architecture of the synagogue.')
                    } else if (id == "c5") {
                        $('.paintingInfoBox').text(text + '. ' + 'Northern Contemporary Dance School still part of the original synagogue building with stage production.')
                    } else if (id == "c6") {
                        $('.paintingInfoBox').text(text + '. ' + 'The surrounding neighbourhood of Chapeltown.')
                    } else if (id == "c7") {
                        $('.paintingInfoBox').text(text + '. ' + 'Modern buildings spreading from Leeds Inner City.')
                    }
                }

                if ($('.paintingpanel h1').text() == "Bradford and the Wool Industry") {
                    var id = $(this).parent().attr('id')
                    var text = $(this).parent().text()
                    if (id == "c1") {
                        $('.paintingInfoBox').text(text + '. ' + 'Bradford Reform Synagogue.')
                    } else if (id == "c2") {
                        $('.paintingInfoBox').text(text + '. ' + 'Wool Exchange.')
                    } else if (id == "c3") {
                        $('.paintingInfoBox').text(text + '. ' + 'Little Germany Business Centre.')
                    } else if (id == "c4") {
                        $('.paintingInfoBox').text(text + '. ' + '19th Century factory worker’s slums.')
                    } else if (id == "c5") {
                        $('.paintingInfoBox').text(text + '. ' + 'Yorkshire Hills.')
                    } else if (id == "c6") {
                        $('.paintingInfoBox').text(text + '. ' + 'External Synagogue Building.')
                    } else if (id == "c7") {
                        $('.paintingInfoBox').text(text + '. ' + 'Bradford Market.')
                    }
                }

                if ($('.paintingpanel h1').text() == "Farewell to Blackpool Jewish Community") {
                    var id = $(this).parent().attr('id')
                    var text = $(this).parent().text()
                    if (id == "c1") {
                        $('.paintingInfoBox').text(text + '. ' + 'Victorian Beach.')
                    } else if (id == "c2a") {
                        $('.paintingInfoBox').text(text + '. ' + 'Northern Pier 1863.')
                    } else if (id == "c2b") {
                        $('.paintingInfoBox').text(text + '. ' + 'Northern Pier 1961.')
                    } else if (id == "c3") {
                        $('.paintingInfoBox').text(text + '. ' + 'War time beach- submarine and warship.')
                    } else if (id == "c4") {
                        $('.paintingInfoBox').text(text + '. ' + 'Promenade from Victorian times to present times.')
                    } else if (id == "c4a") {
                        $('.paintingInfoBox').text(text + '. ' + 'Promenade from Victorian times to present times.')
                    } else if (id == "c5") {
                        $('.paintingInfoBox').text(text + '. ' + 'Victorian steam engine and station.')
                    } else if (id == "c6") {
                        $('.paintingInfoBox').text(text + '. ' + '1871 Raikes Hall.')
                    } else if (id == "c7") {
                        $('.paintingInfoBox').text(text + '. ' + 'Metropole Hotel.')
                    } else if (id == "c8") {
                        $('.paintingInfoBox').text(text + '. ' + 'Grand Theatre.')
                    } else if (id == "c9") {
                        $('.paintingInfoBox').text(text + '. ' + 'Blackpool Tower.')
                    } else if (id == "c9a") {
                        $('.paintingInfoBox').text(text + '. ' + 'Grand ballroom.')
                    } else if (id == "c9b") {
                        $('.paintingInfoBox').text(text + '. ' + 'The indoor circus.')
                    } else if (id == "c9c") {
                        $('.paintingInfoBox').text(text + '. ' + 'Football matches.')
                    } else if (id == "c9d") {
                        $('.paintingInfoBox').text(text + '. ' + 'Boxing.')
                    } else if (id == "c10") {
                        $('.paintingInfoBox').text(text + '. ' + 'Winter Gardens.')
                    } else if (id == "c11") {
                        $('.paintingInfoBox').text(text + '. ' + 'Alhambra.')
                    } else if (id == "c12") {
                        $('.paintingInfoBox').text(text + '. ' + 'The Flying Machine and Scenic Railway.')
                    } else if (id == "c13") {
                        $('.paintingInfoBox').text(text + '. ' + 'Casino.')
                    } else if (id == "c14") {
                        $('.paintingInfoBox').text(text + '. ' + "Loop the Loop' amusement wheel.")
                    } else if (id == "c15") {
                        $('.paintingInfoBox').text(text + '. ' + 'Selection of small businesses - shops, stalls and boarding houses.')
                    } else if (id == "c15_1") {
                        $('.paintingInfoBox').text(text + '. ' + "Selection of small businesses - shops, stalls and boarding houses.")
                    } else if (id == "c16") {
                        $('.paintingInfoBox').text(text + '. ' + "Blackpool Hebrew Congregations' final service.")
                    } else if (id == "c16_1") {
                        $('.paintingInfoBox').text(text + '. ' + "Blackpool Hebrew Congregations' final service.")
                    } else if (id == "c16a") {
                        $('.paintingInfoBox').text(text + '. ' + 'Shabbaton Choir.')
                    } else if (id == "c16b") {
                        $('.paintingInfoBox').text(text + '. ' + 'External architecture of Blackpool Synagogue.')
                    } else if (id == "c16c") {
                        $('.paintingInfoBox').text(text + '. ' + 'Removing the Sefer Torah.')
                    } else if (id == "c16d") {
                        $('.paintingInfoBox').text(text + '. ' + 'Blowing the Shofah.')
                    } else if (id == "c16e") {
                        $('.paintingInfoBox').text(text + '. ' + 'Extra display of stainglass windows.')
                    } else if (id == "c17") {
                        $('.paintingInfoBox').text(text + '. ' + 'Relocating of Sefer Torahs to St Annes Hebrew Congregation Synagogue.')
                    } else if (id == "c17a") {
                        $('.paintingInfoBox').text(text + '. ' + "External architecture of St Ann's Synagogue with the sea behind. ")
                    }
                }

                if ($('.paintingpanel h1').text() == "Sir Moses Montifiore") {
                    var id = $(this).parent().attr('id')
                    var text = $(this).parent().text()
                    if (id == "c1") {
                        $('.paintingInfoBox').text(text + '. ' + 'Bank of England & The Royal Exchange.')
                    } else if (id == "c2") {
                        $('.paintingInfoBox').text(text + '. ' + 'The Stock Exchange.')
                    } else if (id == "c3") {
                        $('.paintingInfoBox').text(text + '. ' + 'Bevis Marks Synagogue.')
                    } else if (id == "c4") {
                        $('.paintingInfoBox').text(text + '. ' + 'Park Lane Present Times.')
                    } else if (id == "c4a") {
                        $('.paintingInfoBox').text(text + '. ' + 'Park Lane.')
                    } else if (id == "c3a") {
                        $('.paintingInfoBox').text(text + '. ' + 'Bevis Marks Synagogue.')
                    } else if (id == "c2a") {
                        $('.paintingInfoBox').text(text + '. ' + 'Stock Exchange.')
                    } else if (id == "c1a") {
                        $('.paintingInfoBox').text(text + '. ' + "London's Modern City Global.")
                    } else if (id == "c5") {
                        $('.paintingInfoBox').text(text + '. ' + 'World map.')
                    } else if (id == "c5_1") {
                        $('.paintingInfoBox').text(text + '. ' + 'World map.')
                    } else if (id == "c6") {
                        $('.paintingInfoBox').text(text + '. ' + 'The Windmill (in Israel).')
                    } else if (id == "c7") {
                        $('.paintingInfoBox').text(text + '. ' + "Montefiore's Coat of Arms.")
                    } else if (id == "c8") {
                        $('.paintingInfoBox').text(text + '. ' + "Portraits-3 stages of Montefiore's life and young Judith. Ramsgate, Kent.")
                    } else if (id == "c9") {
                        $('.paintingInfoBox').text(text + '. ' + 'Interior of Ramsgate Synagogue.')
                    } else if (id == "c9a") {
                        $('.paintingInfoBox').text(text + '. ' + 'Synagogue exterior.')
                    } else if (id == "c10") {
                        $('.paintingInfoBox').text(text + '. ' + 'Mausoleum.')
                    } else if (id == "c11") {
                        $('.paintingInfoBox').text(text + '. ' + "In memory of Judith Montefiore's theological College.")
                    } else if (id == "c12") {
                        $('.paintingInfoBox').text(text + '. ' + "Remnants of the Montefiore's estate, 'East Lodge' and George V Memorial Park.")
                        }
                    }

                    if ($('.paintingpanel h1').text() == "Medieval Lincoln") {
                        var id = $(this).parent().attr('id')
                        var text = $(this).parent().text()
                        if (id == "_1a") {
                            $('.paintingInfoBox').text(text + '. ' + "Lincoln past and present.")
                        } else if (id == "_1b") {
                            $('.paintingInfoBox').text(text + '. ' + "Lincoln past and present.")
                        } else if (id == "_1c") {
                            $('.paintingInfoBox').text(text + '. ' + "The banner divides Lincoln past from present.")
                        } else if (id == "_2") {
                            $('.paintingInfoBox').text(text + '. ' + "The Jew squashed between the forces of church & monarchy.")
                        } else if (id == "_3") {
                            $('.paintingInfoBox').text(text + '. ' + "Lateral Psalter.")
                        } else if (id == "_4") {
                            $('.paintingInfoBox').text(text + '. ' + "Coplin, The Jew, dragged through the streets as mob chases other Jews.")
                        } else if (id == "_5a") {
                            $('.paintingInfoBox').text(text + '. ' + "Jews accused of ‘ritual killing’, and today this was considered a racial act.")
                        } else if (id == "_5b") {
                            $('.paintingInfoBox').text(text + '. ' + "Jews accused of ‘ritual killing’, and today this was considered a racial act.")
                        } else if (id == "_6") {
                            $('.paintingInfoBox').text(text + '. ' + "Garments forced to be worn by Medieval Jews.")
                        } else if (id == "_7") {
                            $('.paintingInfoBox').text(text + '. ' + "Coplin hung.")
                        } else if (id == "_8") {
                            $('.paintingInfoBox').text(text + '. ' + "Return of the Jewish community.")
                        }
                    }

                    if ($('.paintingpanel h1').text() == "United Synagogue") {
                        var id = $(this).parent().attr('id')
                        var text = $(this).parent().text()
                        if (id == "c1") {
                            $('.paintingInfoBox').text(text + '. ' + "Parliamentary Seal")
                        } else if (id == "c2") {
                            $('.paintingInfoBox').text(text + '. ' + "Central Synagogue")
                        } else if (id == "c3") {
                            $('.paintingInfoBox').text(text + '. ' + "The New Synagogue, Egerton Road, Stamford Hill")
                        } else if (id == "c4") {
                            $('.paintingInfoBox').text(text + '. ' + "New West End Synagogue, St. Petersburgh Place")
                        } else if (id == "c5") {
                            $('.paintingInfoBox').text(text + '. ' + "West Hampstead Synagogue, Dennington Park Road")
                        } else if (id == "c6") {
                            $('.paintingInfoBox').text(text + '. ' + "Dollis Hill Synagogue, (now converted to a school)")
                        } else if (id == "c7") {
                            $('.paintingInfoBox').text(text + '. ' + "Hackney Synagogue, AJEX Service")
                        } else if (id == "c8") {
                            $('.paintingInfoBox').text(text + '. ' + "Kinloss Synagogue, Finchley")
                        } else if (id == "c9") {
                            $('.paintingInfoBox').text(text + '. ' + "Kenton Synagogue")
                        } else if (id == "c9a") {
                            $('.paintingInfoBox').text(text + '. ' + "Stone Menorah")
                        } else if (id == "c10") {
                            $('.paintingInfoBox').text(text + '. ' + "Ilford Synagogue, Beehive Lane (partitions are opened into the Communal Hall)")
                        } else if (id == "c11") {
                            $('.paintingInfoBox').text(text + '. ' + "Hendon Synagogue Beth Medrash, Raleigh Close")
                        } else if (id == "c11a") {
                            $('.paintingInfoBox').text(text + '. ' + "Morning Prayers")
                        } else if (id == "c11b") {
                            $('.paintingInfoBox').text(text + '. ' + "Study Room")
                        } else if (id == "c11c") {
                            $('.paintingInfoBox').text(text + '. ' + "Crown in the Jewel, Hendon Community")
                        } else if (id == "c11d") {
                            $('.paintingInfoBox').text(text + '. ' + "Chief Rabbi Award")
                        } else if (id == "c12") {
                            $('.paintingInfoBox').text(text + '. ' + "South London")
                        } else if (id == "c12a") {
                            $('.paintingInfoBox').text(text + '. ' + "Old Brixton Synagogue (outside) with Victorian costume")
                        } else if (id == "c12b") {
                            $('.paintingInfoBox').text(text + '. ' + "New South London Synagogue, showing South Lodge, Sheltered accommodation, and exterior of synagogue through arch")
                        } else if (id == "c13") {
                            $('.paintingInfoBox').text(text + '. ' + "St. John's Wood Synagogue, Grove End Road. On the left men are in prayer, while on the right the women are in a meeting in the attached hall")
                        } else if (id == "c14") {
                            $('.paintingInfoBox').text(text + '. ' + "Kingsbury Synagogue")
                        } else if (id == "c14a") {
                            $('.paintingInfoBox').text(text + '. ' + "Bet Medrash- people studying")
                        } else if (id == "c14b") {
                            $('.paintingInfoBox').text(text + '. ' + "The Holocaust Memorial, (seen on wall when entering)")
                        } else if (id == "c14c") {
                            $('.paintingInfoBox').text(text + '. ' + "The Mikvah")
                        } else if (id == "c15") {
                            $('.paintingInfoBox').text(text + '. ' + "Borehamwood and Elstree Synagogue")
                        } else if (id == "c15a") {
                            $('.paintingInfoBox').text(text + '. ' + "Attached nursery")
                        } else if (id == "c16") {
                            $('.paintingInfoBox').text(text + '. ' + "Pinner Synagogue, on the left a Purim celebration")
                        } else if (id == "c17") {
                            $('.paintingInfoBox').text(text + '. ' + "Northwood, the building of a new synagogue")
                        } else if (id == "c18") {
                            $('.paintingInfoBox').text(text + '. ' + "The future - Education")
                        } else if (id == "c18a") {
                            $('.paintingInfoBox').text(text + '. ' + "King Solomon High School, Redbridge")
                        } else if (id == "c18b") {
                            $('.paintingInfoBox').text(text + '. ' + "The Wolfson Hillel Primary School")
                        } else if (id == "c18c") {
                            $('.paintingInfoBox').text(text + '. ' + "The Michael Sobell Sinai School")
                        } else if (id == "c18d") {
                            $('.paintingInfoBox').text(text + '. ' + "Jewish Free School")
                        } else if (id == "c18e") {
                            $('.paintingInfoBox').text(text + '. ' + "King Solomon High School, Ilford")
                        } else if (id == "ci") {
                            $('.paintingInfoBox').text(text + '. ' + "List of United Synagogues at time of commissioned work")
                        } else if (id == "cii") {
                            $('.paintingInfoBox').text(text + '. ' + "Portraits of Chief Rabbis up to date of the commissioned work")
                        } else if (id == "ciii") {
                            $('.paintingInfoBox').text(text + '. ' + "The Beth Din Court")
                        } else if (id == "civ") {
                            $('.paintingInfoBox').text(text + '. ' + "Cheder")
                        } else if (id == "cv") {
                            $('.paintingInfoBox').text(text + '. ' + "Kashrut")
                        } else if (id == "cvi") {
                            $('.paintingInfoBox').text(text + '. ' + "Publications")
                        } else if (id == "cvii") {
                            $('.paintingInfoBox').text(text + '. ' + "Cemeteries. Willesden and Waltham Abbey with Holocaust memorial")
                        } else if (id == "cviii") {
                            $('.paintingInfoBox').text(text + '. ' + "Visitation Committee - left- Pentonville Prison, right - an imaginary hospital")
                        } else if (id == "cix") {
                            $('.paintingInfoBox').text(text + '. ' + "United Synagogue 125th Anniversary emblem")
                        }
                    }


                    $('.paintingInfoBox.hide').slideToggle(300)
                    $('.paintingInfoBox.hide').removeClass('hide')

                })

            var ttext = $('.page--title h1').text().replace(/[^a-z0-9\s]/gi, '').replace(/\s/g, '')

            if (ttext == "WORK" || ttext == "VisualStories" || ttext == "JewsinPrayer" || ttext == "LondonLife") {
                $('.footer-link, .nav_link').each(function() {
                    if ($(this).text().replace(/[^a-z0-9\s]/gi, '').replace(/\s/g, '') == "WORK") {
                        $(this).addClass('w--current')
                    }
                })
            }
            if (ttext == "PRESSMEDIA") {
                $('.footer-link, .nav_link').each(function() {
                    if ($(this).text().replace(/[^a-z0-9\s]/gi, '').replace(/\s/g, '') == "PRESSMEDIA") {
                        $(this).addClass('w--current')
                    }
                })
            }

            //$('body').append('<div id="footerLine"></div>')

            /*
              if(  $('.footer_links .w--current').length > 0){
                var top = $('.footer_links .w--current').offset().top
                var left = $('.footer_links .w--current').offset().left
                $('#footerLine').css('left', left)
                $('#footerLine').css('top', top)
              }else{
                var top = $('.footer_links a').eq(0).offset().top
                var left = $('.footer_links a').eq(0).offset().left
                $('#footerLine').css('left', left)
                $('#footerLine').css('top', top)
              }
              */

            $('.nav-menu .w--current').addClass('navLine')

            $('.menu-button').click(function() {
                $('.navLine').removeClass('navLine')
                $('.nav-menu .w--current').addClass('navLine')
            })

            /*
              $('.footer--top').hover(
                function() {
                  $('.footer_links a').hover(
                    function() {
                      var top = $(this).offset().top
                      var left = $(this).offset().left
                      $('#footerLine').css('left', left)
                      $('#footerLine').css('top', top)
                    }, function() {

                    }
                  );
                }, function() {
                  if(  $('.footer_links .w--current').length > 0){
                    var top = $('.footer_links .w--current').offset().top
                    var left = $('.footer_links .w--current').offset().left
                    $('#footerLine').css('left', left)
                    $('#footerLine').css('top', top)
                  }
                }
              );
              */

            $('.nav_link').hover(
                function() {
                    $('.navLine').removeClass('navLine')
                    $(this).addClass('navLine')
                },
                function() {

                }
            );

            //image loading



        });

    $(document).ready(function() {
        $('.exhibitionimage').each(function(k, v) {
            var div = $(this);
            setTimeout(function() {
                div.addClass('loadExImage')
            }, (k + 0) * 1200);
        });

        $('.content--right.exhibitions').children().each(function(k, v) {
            var div = $(this);
            setTimeout(function() {
                div.addClass('loadExText')
            }, (k + 1) * 160);
        });

        $('.pressitem, .citem, .vaitem').each(function(k, v) {
            var div = $(this);
            setTimeout(function() {
                div.addClass('loadCItem')
            }, (k + 1) * 400);
        });

        $('.pressheader--section--top, .vabanner, .pbanner').addClass('loaded')

        $('.abouttext').addClass('showAboutText')
    })
