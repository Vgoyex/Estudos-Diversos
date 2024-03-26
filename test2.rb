require 'gtk3'

class Calculator
  def initialize
    @display = ""
    build_gui
  end

  def build_gui
    Gtk.init

    @window = Gtk::Window.new
    @window.title = "Calculator"
    @window.border_width = 10
    @window.signal_connect("delete_event") { |_widget, _event| Gtk.main_quit }

    grid = Gtk::Grid.new
    @window.add(grid)

    @display_label = Gtk::Label.new
    @display_label.set_hexpand(true)
    @display_label.set_vexpand(true)
    grid.attach(@display_label, 0, 0, 4, 1)

    buttons = [
      ['7', '8', '9', '/'],
      ['4', '5', '6', '*'],
      ['1', '2', '3', '-'],
      ['0', 'C', '=', '+'],
    ]

    buttons.each_with_index do |row, i|
      row.each_with_index do |label, j|
        button = Gtk::Button.new(label: label)
        button.set_hexpand(true)
        button.set_vexpand(true)
        button.signal_connect("clicked") { |_widget| button_click(label) }
        grid.attach(button, j, i + 1, 1, 1)
      end
    end

    @window.show_all
    Gtk.main
  end

  def button_click(label)
    case label
    when 'C'
      @display = ""
    when '='
      calculate
    else
      @display += label
    end

    @display_label.text = @display
  end

  def calculate
    begin
      result = eval(@display)
      if result.nil? || result.nan?
        show_alert("Invalid Calculation 1")
      else
        @display = result.to_s
      end
    rescue StandardError
      show_alert("Invalid Calculation 2")
    end

    @display_label.text = @display
  end

  def show_alert(message)
    dialog = Gtk::MessageDialog.new(
      @window,
      Gtk::DialogFlags::MODAL,
      Gtk::MessageType::ERROR,
      Gtk::ButtonsType::OK,
      message
    )
    dialog.run
    dialog.destroy
  end
end

Calculator.new
