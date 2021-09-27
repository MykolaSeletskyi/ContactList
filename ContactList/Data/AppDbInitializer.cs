using ContactList.Data.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactList.Data
{
    public class AppDbInitializer
    {
        public static void Seed(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<AppDbContext>();
                if (!context.Contacts.Any())
                {
                    context.Contacts.AddRange(
                    new Contact()
                    {
                        Name = "Camilla Terry",
                        Phone = "06712345687",
                        Email = "tt@gmail.com",
                        Gender = "women",
                        Status = "Private",
                        Image = "17"
                    },
                    new Contact()
                    {
                        Name = "Ed Gaven",
                        Phone = "1139681251",
                        Email = "EdGaven@mail.com",
                        Gender = "men",
                        Status = "Work",
                        Image = "21"
                    },
                    new Contact()
                    {
                        Name = "Sibbie Rockliffe",
                        Phone = "3026870184",
                        Email = "SibbieRockliffe@mail.com",
                        Gender = "women",
                        Status = "Family",
                        Image = "32"
                    });
                    context.SaveChanges();
                }
            }
        }
    }
}
