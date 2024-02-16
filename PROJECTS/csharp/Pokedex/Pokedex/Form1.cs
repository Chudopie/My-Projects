using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace Pokedex
{
    public partial class Form1 : Form
        {
            public Form1()
            {
                InitializeComponent();
            }

        private void button1_Click(object sender, EventArgs e)
         {
            string servidor = "localhost";
            string bd = "hello_sql";
            string user = "root";
            string pass = "admin1234";
            string datos = "null";

            string cadenaConexion = "Database=" +bd + "; Data Source=" + servidor + ";User id="+ user + "; Password=" + pass + "" ;
            MySqlConnection connectionDB = new MySqlConnection(cadenaConexion);
            MySqlDataReader reader = null;
            try
            {
                string consulta = "select * from pokeusers;";
                MySqlCommand comando = new MySqlCommand(consulta);
                comando.Connection = connectionDB;
                connectionDB.Open();
                

                reader = comando.ExecuteReader();

                while(reader.Read())
                {
                    datos += reader.GetString(1) +":"+ reader.GetString(2) + "\n";
                }



                MessageBox.Show(datos);
                  
               
            }
            catch (MySqlException ex)
            {
                MessageBox.Show(ex.Message);
            }
            finally
            {
                connectionDB.Close();
            }
         }
    }
}

