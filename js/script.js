$(function(){



	var _data = [
		{
			term: 'Trap Queen',
			def: 'A female, who\'s loyal to her boyfriend, and is intelligent. She takes no shit from anyone and rides for her man.',
			used: 0
		},
		{
			term: 'Butter Face',
			def: 'A girl who is hot, except for her (but her, butter) face.',
			used: 0
		},
		{
			term: 'Pornocchio',
			def: 'A person who embellishes their sexcapades to sound cooler.',
			used: 0
		},
		{
			term: 'Eyeolating',
			def: 'When you\'re checking out a girl (or guy) so vigorously that you violate them.',
			used: 0
		},
		{
			term: 'Ratchet',
			def: 'A diva, mostly from urban cities and ghettos, that has reason to believe she is every mans eye candy. Unfortunately, she\'s wrong.',
			used: 0
		},
		{
			term: 'Maintenance Poop',
			def: 'The act of visiting the bathroom with the intention to only urinate, but instead relieve a little poop.',
			used: 0
		},
		{
			term: 'Scativism',
			def: 'Shitting on peoples property as a form of protest.',
			used: 0
		},
		{
			term: 'Urethra Franklin',
			def: 'Any sexual act involving penetration/stimulation of the urethra',
			used: 0
		},
		{
			term: 'Shit Ticket',
			def: '(n.) a single section of bathroom tissue.',
			used: 0
		},
		{
			term: 'Trend Bomber',
			def: 'When someone tries to become apart of a trend that they do not belong in. Posing to apart of a cultural trend that they have no business being apart of.',
			used: 0
		},
		{
			term: 'Alltheist',
			def: 'A person who tries to claim ties to every religion out of fear of picking the "wrong" one.',
			used: 0
		},
		{
			term: 'Crash Your Squad',
			def: 'When someone is new, or hasn\'t found their group yet, a group lets them hang with them until they make friends.',
			used: 0
		},
		{
			term: 'Lactcident',
			def: 'Accidental explosive diarrhea caused by consuming a dairy product by a lactose intolerant person.',
			used: 0
		},
		{
			term: 'Jean Jam',
			def: 'When jeans are way too tight on your junk. Limits mobility, decreases circulation, and potentially lowers sperm count.',
			used: 0
		},
		{
			term: 'Truffle Butter',
			def: 'The fastest route to a urinary tract infection.',
			used: 0
		},
		{
			term: 'Lemon-\nparty',
			def: 'A old man gay orgy that is good at inducing vomiting.',
			used: 0
		},
		{
			term: 'Sapio-\nsexual ',
			def: 'One who finds intelligence the most sexually attractive feature.',
			used: 0
		},
		{
			term: 'Thot',
			def: 'THAT HOE OVER THERE',
			used: 0
		},
		{
			term: 'Blumpkin',
			def: 'The delicately balanced art of getting your cock sucked while taking a dump.',
			used: 0
		},
		{
			term: '(Rick) Santorum',
			def: 'The sometimes frothy, usually slimy, amalgam of lubricant, stray fecal matter, and ejaculate that leaks out of the receiving partner\'s anus after a session of anal intercourse.',
			used: 0
		},
		{
			term: 'Shade',
			def: 'Acting in a casual or disrespectful manner towards someone/dissing a friend',
			used: 0
		},
		{
			term: 'Sex',
			def: 'What kind of moron are you that you look up sex in the urban dictionary?',
			used: 0
		},
		{
			term: 'Shena-\nnigans',
			def: 'Deception or tomfoolery on the part of carnival stand operators.',
			used: 0
		},
		{
			term: 'Te\'oing',
			def: 'To have sex with an imaginary women or object',
			used: 0
		},
		{
			term: 'Binders Full of Women',
			def: 'Where Mitt Romney gets his women from',
			used: 0
		},
		{
			term: 'DudeBro',
			def: 'Dude bro\'s are incredibly insecure in their manhood, which makes them: insanely jealous of their girl friends, overly macho, and laughably homophobic. currently, there is no cure for being a dude bro.',
			used: 0
		},
		{
			term: 'Ann Curry\'d',
			def: 'Fired without reason or cause',
			used: 0
		},	
		{
			term: 'Make It Snow',
			def: 'It is similar to "making it rain", except that instead of throwing dollar bills, one is so rich that they are able to throw diamonds. In effect, making it snow. Diamonds can be substituted for a large quantity of cocaine.',
			used: 0
		},
		{
			term: 'Yolo',
			def: '"carpe diem" for stupid people',
			used: 0
		},
		{
			term: 'Struggle Bus',
			def: 'Used to metaphorically describe a difficult situation, as in hard schoolwork.',
			used: 0
		},
		{
			term: 'Body-\nbooking',
			def: 'Some who is contantly posting pictures on facebook of themselves in swims suits and workout clothes to show everyone how hot they are.',
			used: 0
		},
		{
			term: 'Dankrupt',
			def: 'To be out of marijuana',
			used: 0
		},
		{
			term: 'Orgasm',
			def: 'The meaning of life',
			used: 0
		},
		{
			term: 'Barbie',
			def: 'A plastic whore',
			used: 0
		},
		{
			term: 'Penis',
			def: 'One of two things a man gets to keep after a divorce',
			used: 0
		},
		{
			term: 'Moobs',
			def: 'This is what happens when fat gathers in a male\'s chest area, and gives him the appearance of having breasts.',
			used: 0
		},
		{
			term: 'Taylor Swift',
			def: 'Cocaine, derived from the word for "white girl"',
			used: 0
		},
		{
			term: 'Obama Baby',
			def: 'A child conceived after Obama was proclaimed President by way of celebratory sex, or any baby born under Barack Obama\'s term(s).',
			used: 0
		},
		{
			term: 'Alcohol',
			def: 'The antidote to reality',
			used: 0
		},

	]

	game();

	$("#new-game").click(function() {
		game(true);
	});

	$("#help").click(function() {
		$("#info-overlay").fadeIn("fast");
	})

	$("#info-overlay .exit").click(function() {
		$("#info-overlay").fadeOut("fast");
	})


	function game(_new_game) {

		var _chosenAll = [];

		if (_new_game) {
			new_game()
		} else {
			$("#next").click(function() {
				refresh();
				outputTerms();
			});

			$("#check").click(function() {
				check_answers();
			});

			$("#see-answers").click(function() {
				see_answers();
			});

			$("#bravo").draggable({ 
			snap: ".snap-to", 
			stop: function() {
		  		check_pos();
			     }
			});

			$("#alfa").draggable({ 
				snap: ".snap-to", 
				stop: function() {
			  		check_pos();
			     }
			});

			$("#charlie").draggable({ 
				snap: ".snap-to", 
				stop: function() {
			  		check_pos();
			     }
			});

			$("#delta").draggable({ 
				snap: ".snap-to", 
				stop: function() {
			  		check_pos();
			     }
			});

		}
		
		outputTerms();

		document.getElementById('current-score').innerHTML = "0";
		document.getElementById('out-of-total').innerHTML = "0";

		function outputTerms() {

			var _chosen = [];
			for (var i = 0; i < 4; i++) {
				var _rando = getRandomInt(0, (_data.length - 1));

				while (_chosenAll.indexOf(_rando) != -1) {
					_rando = getRandomInt(0, (_data.length - 1));
					console.log("duplicate")
				}
				_chosen.push(_rando);
				_chosenAll.push(_rando);
			};

			$(".term").each(function(i) {
				$(this).html("<p>" + _data[_chosen[i]].term + "</p>" );
				$(this).data("num", _chosen[i]);
			});

			var _chosenShuffled = shuffle(_chosen);
			$('.answer-row').each(function(i) {
				$(this).children('div').html("<p>" + _data[_chosenShuffled[i]].def + "</p>" );
				$(this).children('div').data("num", _chosenShuffled[i]);
			});

			console.log(_chosenAll);
		}

		function check_pos() {
			var return_flag = false;
			$(".snap-to").each(function() {
				var e = $(this);
				var check_lined_up = 0;
				$(".answer-row").children('div').each(function() {
					 if (e.offset().top == $(this).offset().top && e.offset().left == $(this).offset().left) {
					 	check_lined_up++;
					 	//console.log(e.offset().top);
					 	//console.log($(this).offset().top);
					 } 
				});
				if (check_lined_up > 1 || check_lined_up == 0) {
					return_flag = true;
					return false;
				}
			});
			if (return_flag) return;
			$("#check").show("fast");
		}

		function check_answers() {
			$("#check").hide("fast");
			$("#alfa").draggable({ disabled: true });  
			$("#bravo").draggable({ disabled: true });  
			$("#charlie").draggable({ disabled: true });  
			$("#delta").draggable({ disabled: true });  
			var num_correct = 0;
			$(".term").each(function() {		
				var e = $(this);
				$(".answer-row").children('div').each(function() {
					 if (e.offset().top == $(this).offset().top) {
					 	if (e.data("num") == $(this).data("num")) {
					 		num_correct++;
					 		$(this).css({"background-color" : "rgba(0, 102, 0, .5)"})
					 	} else {
					 	 	$(this).css({"background-color" : "rgba(153, 0, 0, .5)"});
					 	 	/*var el = $(this);
					 	 	$(".term").each(function() {
					 	 		if (el.data("num") == $(this).data("num")) {
					 	 			var move_me = $(this).offset().top - el.offset().top;
					 	 			console.log(".term : " + $(this).offset().top + " " + $(this));
					 	 			console.log(".answer : " + el.offset().top  + " " + el);
					 	 			move_me =  parseInt(el.css('top')) + move_me + "px";
					 	 			console.log(move_me);
					 	 			el.animate({
									    top: move_me
									  }, 1000);
					 	 		}
					 	 	});*/
					 	 	
					 	}
					 } 
				});
			});

			var current_score = parseInt(document.getElementById('current-score').innerHTML) + num_correct;
			var out_of_total = parseInt(document.getElementById('out-of-total').innerHTML) + 4;

			document.getElementById('current-score').innerHTML = current_score.toString();
			document.getElementById('out-of-total').innerHTML = out_of_total.toString();

			$("#next").fadeIn("fast");
			if (num_correct < 4) {
				$("#see-answers").fadeIn("fast");
			};
			
		}

		function see_answers() {
			$(".term").each(function() {		
				var e = $(this);
				$(".answer-row").children('div').each(function() {
					 if (e.offset().top == $(this).offset().top) {
					 	if (e.data("num") != $(this).data("num")) {
					 	 	var el = $(this);
					 	 	$(".term").each(function() {
					 	 		if (el.data("num") == $(this).data("num")) {
					 	 			var move_me = $(this).offset().top - el.offset().top;
					 	 			console.log(".term : " + $(this).offset().top + " " + $(this));
					 	 			console.log(".answer : " + el.offset().top  + " " + el);
					 	 			move_me =  parseInt(el.css('top')) + move_me + "px";
					 	 			console.log(move_me);
					 	 			el.animate({
									    top: move_me
									  }, 1000);
					 	 		}
					 	 	});
					 	 	
					 	}
					 } 
				});
			});
		}

		function refresh() {
			$("#next").fadeOut("fast");
			$("#check").fadeOut("fast");
			$("#see-answers").fadeOut("fast");
			$("#alfa").draggable({ disabled: false });  
			$("#bravo").draggable({ disabled: false });  
			$("#charlie").draggable({ disabled: false });  
			$("#delta").draggable({ disabled: false }); 
			$(".answer-row").children('div').each(function() {
				$(this).css({
					"top": "0px",
					"left" : "0px",
					"background-color" : "rgba(0,0,0,.5)"
				});
			});
		}
		
		function new_game() {
			$("#next").fadeOut("fast");
			$("#check").fadeOut("fast");
			$("#see-answers").fadeOut("fast");
			$(".answer-row").children('div').each(function() {
				$(this).css({
					"top": "0px",
					"left" : "0px",
					"background-color" : "rgba(0,0,0,.5)"
				});
			});
		}
	
	}

	function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function shuffle(input) {
	    for (var i = input.length-1; i >=0; i--) {
	     
	        var randomIndex = Math.floor(Math.random()*(i+1)); 
	        var itemAtIndex = input[randomIndex]; 
	         
	        input[randomIndex] = input[i]; 
	        input[i] = itemAtIndex;
	    }
	    return input;
	}


});
