package Interfaces;

import Services.FileReader;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.io.File;

public class CompileWindow {
  Window CompilerWindow = new Window();
  FileChooser FilePicker = new FileChooser();
  File selectedFile = null;
  JTextArea output = null;
  JTable codeInput = null;
  JTable memInput = null;
  JPanel leftPanel = null;
  JPanel rightPanel = null;

  String program = null;
  FileReader reader = new FileReader();
  Container box = null;
  JFrame frame = null;


  public CompileWindow(){
    String[] codeCols = {"Linha", "Instrução", "Atributo 1", "Atributo 2","Comentario"};
    String[] memCols = {"Endereço", "Valor"};

    box = CompilerWindow.getBox();
    frame = CompilerWindow.getFrame();

    box.add(CompilerWindow.createText("Código"));
    codeInput = CompilerWindow.createTable(codeCols,300,980, 400);
    box.add(CompilerWindow.createScroll(980, 300, codeInput));

    leftPanel = CompilerWindow.createPanel(490, 350);
    leftPanel.add(CompilerWindow.createText("Memória"));

    memInput = CompilerWindow.createTable(memCols,300,480, 300);
    leftPanel.add(CompilerWindow.createScroll(480, 300, memInput));
    box.add(leftPanel);

    rightPanel = CompilerWindow.createPanel(490, 350);
    rightPanel.add(CompilerWindow.createText("Saída"));
    output = CompilerWindow.createTextInput(480,300,0,0);
    rightPanel.add(CompilerWindow.createScroll(480,300,output));
    box.add(rightPanel);


    box.add(CompilerWindow.createButton("Executar"));
    box.add(CompilerWindow.createButton("Proximo Passo"));
  }

  public void actionPerformed(ActionEvent e) {
    switch (e.getActionCommand()) {
      case "open_chooser":

        break;
      default:
        break;
    }
  }

  public void setWindowStatus(Boolean value){
    CompilerWindow.setWindowStatus(value);
  }
}
