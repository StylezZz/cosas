#include <iostream>
#include <iomanip>
using namespace std;

void hallarCategoria(char *cadena,char &categoria){
    int i=0,cantPalabras;
    // Cantidad de caracteres:
    while(cadena[i]){
        i++;
    }
    cantPalabras=i;
    // Hallar caracter:
    if(cadena[cantPalabras-2]=='-'){
        categoria = cadena[i-1];
        cadena[cantPalabras-2]=cadena[cantPalabras];
    }else{
        categoria='D';
    }
    i=0;
    // Cambiar formato:
    for(int i=0;cadena[i];i++){
        if(cadena[i]=='_' or cadena[i]=='-'){
            cadena[i]=' ';
        }
    }
}


int main(){
    char cadena[150] = "IPARRAGUIRRE_VILLEGAS_NICOLAS-EDILBERTO-B";
    char categoria;
    hallarCategoria(cadena, categoria);
    cout<<"El nombre es: "<<cadena<<endl;
    cout<<"La categoria es: "<<categoria<<endl;
}


