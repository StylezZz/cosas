#include<stdio.h>

int esPrimo(int numero){
    int i;
    for(i=2;i<numero;i++){
        if(numero%i==0){
            return 0;
        }
    }
    return 1;
}

int main(){
    //Un monedero posee monedas de 5,2 y 1 sol, se le pide la menor cantidad de 
    //monedas que se deben utilizar para dispensar determinada cantidad de dinero

    int dinero,monedas5,monedas2,monedas1;
    printf("Ingrese la cantidad de dinero: ");
    scanf("%d",&dinero);

    if(dinero % 5 == 0){
        monedas5 = dinero / 5;
        printf("Monedas de 5: %d ",monedas5);
    }else{
        monedas5 = dinero / 5;
        dinero = dinero - (monedas5 * 5);
        if(dinero % 2 == 0){
            monedas2 = dinero / 2;
            printf("Monedas de 5: %d ",monedas5);
            printf("Monedas de 2: %d ",monedas2);
        }else{
            monedas2 = dinero / 2;
            dinero = dinero - (monedas2 * 2);
            monedas1 = dinero;
            printf("Monedas de 5: %d ",monedas5);
            printf("Monedas de 2: %d ",monedas2);
            printf("Monedas de 1: %d ",monedas1);
        }
    }
    




    return 0;
}