#include<iostream>
#include<cstring>
using namespace std;
void encrypt(char a[])
{ int i;
    for(i=0;i<strlen(a);i++)
    {
        if((a[i]+7)<=122)
    cout<<char(a[i]+7);
    else
        cout<<char(a[i]+7-122);
    }
}
void decrypt(char a[])
{ int i;
    for(i=0;i<strlen(a);i++)
    {
        if((a[i]-7)<=97)
    cout<<char(a[i]-7);
    else
        cout<<char(122-(7-(97-a[i])));
    }
}
int main()
{
    int n;
    cin>>n;
    char a[n][100];
    int i,k,j,t;
    for(i=0;i<n;i++)
    {   
        cin>>k;
        cin>>a[i];
    }
  for(i=0;i<n;i++)
  {  t=0;
    for(j=0;j<strlen(a[i])-3;j++)
    {  
        if(a[i][j+0]=='t' && a[i][j+1]=='h' && a[i][j+2]=='e' )
        { t=1;
        break;
        }
        if(t==1)
        encrypt(a[i]);
        else
        decrypt(a[i]);
    }
  }
}