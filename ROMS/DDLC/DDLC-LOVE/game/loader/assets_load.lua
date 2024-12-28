function loaderAssets(l_timer)
	if not gui then
		gui = {}
	end

	--loading assets
	if l_timer == 96 then
		consolefont = lg.newFont('assets/fonts/F25_Bank_Printer.ttf',18)
		allerfont = lg.newFont('assets/fonts/Aller_Rg.ttf',23)
		lg.setFont(allerfont)

	elseif l_timer == 97 then
		sfx1 = love.audio.newSource('assets/audio/sfx/select'..audio_ext,'static')
		sfx2 = love.audio.newSource('assets/audio/sfx/hover'..audio_ext,'static')
		menu_bg_m = lgnewImage("assets/images/gui/menu_bg_m.jpg")
		gui.keysbox = lgnewImage("assets/images/gui/button/box.png")
		gui.mmenu = lgnewImage("assets/images/gui/overlay/main_menu.png")
		gui.gmenu = lgnewImage("assets/images/gui/overlay/game_menu.png")
		
	elseif l_timer == 98 then
		--splash, title screen, gui elements, sfx
		namebox = lgnewImage('assets/images/gui/namebox.png')
		textbox = lgnewImage('assets/images/gui/textbox.png')
		if g_system == 'PSP' then
			menu_bg = lgnewImage('assets/images/gui/menu_bg.png')
		else
			menu_bg = lgnewImage('assets/images/gui/menu_bg.jpg')
		end
		gui.check = lgnewImage('assets/images/gui/button/check_selected_foreground.png')
		gui.ctc = lgnewImage('assets/images/gui/ctc.png')
		gui.skip = lgnewImage('assets/images/gui/skip.png')
		gui.sidebar = lgnewImage('assets/images/gui/overlay/sidebar.png')
		gui.slothover = lgnewImage('assets/images/gui/button/slot_hover_background.png')
		gui.scrbarh = lgnewImage('assets/images/gui/scrollbar/horizontal_poem_bar.png')
		gui.scrhover = lgnewImage('assets/images/gui/slider/horizontal_hover_thumb.png')
		
	elseif l_timer == 99 then
		dfnt = lg.newFont('assets/fonts/VerilySerifMono.ttf',23) --act 2 "edited" text font
		rifficfont = lg.newFont('assets/fonts/RifficFree-Bold.ttf',24) --charactername font
		m1 = lg.newFont('assets/fonts/m1.ttf',30) --monika poem font
		y1 = lg.newFont('assets/fonts/y1.ttf',33) --yuri poem font
		s1 = lg.newFont('assets/fonts/s1.ttf',35) --sayori poem font
		n1 = lg.newFont('assets/fonts/n1.ttf',24) --natsuki poem font
		
	elseif l_timer == 101 then
		gui.mainbuttons = lgnewImage("assets/images/gui/"..settings.lang.."/mainbuttons.png")
		gui.gamebuttons = lgnewImage("assets/images/gui/"..settings.lang.."/gamebuttons.png")
		gui.history = lgnewImage("assets/images/gui/"..settings.lang.."/history.png")
		gui.load = lgnewImage("assets/images/gui/"..settings.lang.."/load.png")
		gui.save = lgnewImage("assets/images/gui/"..settings.lang.."/save.png")
		gui.settings = lgnewImage("assets/images/gui/"..settings.lang.."/settings.png")
		gui.setbuttons = lgnewImage("assets/images/gui/"..settings.lang.."/setbuttons.png")
	end
end
