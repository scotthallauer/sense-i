---
id: LAUNCH
title: Sense-i Launcher Application
sidebar_label: Sense-i Launcher
slug: /LAUNCH
---

## Introduction  

This **step-by-step guide** will show you how to use the **Sense-i Launcher** application.  

Access the latest version of the [Sense-i Launcher Installation files here.](https://elfworks.co.za/subdomains/sense-i/Install/download.html)  

Once you have linked to the Sense-i Launcher Download site, these are the necessary steps to be followed.

:::note
The buttons & links displayed on the images in this guide are **NOT ACTIVE** and soley used for **reference purposes**.
:::

The **Sense-i Launcher** allows you access the **SEMS application** and **connect to the relevant database(s)**.

Access the **Sense-i Launcher** by clicking on the Sense-i Launcher **desktop shortcut**.

![](../static/img/docs/LAUNCH/launchericon1.png)  

The **Sense-i Launcher application** opens.

![](../static/img/docs/LAUNCH/image11.png)  

:::note
There will be no **SEMS connections** available when using the **Sense-i Launcher** for the first time.  
:::

## Quick Connect  

The quickest method to setup initial **SEMS connections** is described below.  

:::note
The necessary Connection Settings must be available to complete the **Load Connection** process.  

These settings can be obtained from your **Sense-i Systems Administrator** and/or 
the [Sense-i Help Desk](mailto:help@sense-i.co).  

These settings, in text format, can then be accessed from the **relevant location** on your computer.

**Proceed once this information is available**.  
:::


![](../static/img/docs/LAUNCH/image11a.png)  

1.	Click the [ **Connect** ] button.  

A warning pop-up box appears with;  

![](../static/img/docs/LAUNCH/image17.png)  

2.	Click the [ **Yes** ] button.  

----  

## Load Connection  

### 

The **Load Connection** screen will offer two options;  

![](../static/img/docs/LAUNCH/image15.png)  

### Open Config file (.INI)  

1.	Selecting this option and then clicking the [ **Load** ] button will open the MS Windows **File Explorer**.

![](../static/img/docs/LAUNCH/image16.png)  

2.  **Locate** and [ **Open** ] the relevant **.ini** file.  

----

Warning pop-up boxes confirming database and connection type appear.  

![](../static/img/docs/LAUNCH/image18.png)

3.  Select [ **Yes** ] to load the desired connection(s).  

:::note
Usually the company would have **two** databases:
- The **TEST database** (dB) which is used for training, practice and testing purposes.
- The **LIVE dB** where the actual daily work is done.  

The Database Servers can be connected to in two ways:
- Local Area Network **(LAN) connection** - this when the database server is on same LAN, e.g. Office network.
- **Remote connection** - this when the database server is accessed remotely, e.g. via the internet.

Therefore there are typically four connection options:  
- **Remote** connection to the **LIVE database**
- **Remote** connection to the **TEST database**
- **Local connection** to the **LIVE** database - same **LAN** as that of the Database Server
- **Local connection** to the **TEST** database using the local network to connect to the dB Server.
:::  

Once the relevant connection(s) have been loaded an **Information** dialogue box is displayed.  

![](../static/img/docs/LAUNCH/image22.png)  

4.  Click the [ **Ok** ] button.  

----

The **Load Connection** screen is now active again.  

![](../static/img/docs/LAUNCH/image23.png)  

5.  Click on the [ **Home** ] button to return to the main screen.  

----

### Copy and Paste

1.	Selecting this option will enable you to copy the relevant settings from:
	- an e-mail message, 
	- an exsisting .INI file or 
	- an appropriate text file.

![](../static/img/docs/LAUNCH/image25.png)  

----

2.	Copy the relevant **text** from the **e-mail** / **text file** received.  

3.	Once copied, return to the **Sense-i Launcher** application.  

![](../static/img/docs/LAUNCH/image30.png)  

4.	Click the [ **Paste** ] button.  

----

The **connection settings** now appear in the text box field.

![](../static/img/docs/LAUNCH/image32.png)  

5.  Click the [ **Load** ] button.  

----

Warning pop-up boxes confirming database and connection type appear.  

![](../static/img/docs/LAUNCH/image18.png)

6.  Select [ **Yes** ] to load the desired connection(s).  

----

Once the relevant connection(s) have been loaded an **Information** dialogue box is displayed.  

![](../static/img/docs/LAUNCH/image22.png)  

7.  Click the [ **Ok** ] button.  

----

The **Load Connection** screen is now active again.  

![](../static/img/docs/LAUNCH/image27.png)  

8.  Click on the [ **Home** ] button to return to the main screen.  

----

## Home Page - Ready to Connect.  

Once the connections have been loaded, Sense-i Launcher is ready to connect to the **chosen database**.

![](../static/img/docs/LAUNCH/image28.png)  

1. Click on the [ **Connect** ] button.  

The application will now download and launch the Sense-i Enterprise Management System (**SEMS**) using the 
relevant connection options.

:::note  
**Sense-i Launcher** will automatically download the latest version of the **SEMS application**.  
This download process will only occur again when the database is been upgraded.
:::  

----

## Advanced Configuration  

This section is for **Sense-i System Administrators** and designed to **configure specific database connections**.  

Access the **Menu** by selecting the menu icon near the top left corner of the Sense-i Launcher application.

![](../static/img/docs/LAUNCH/menuIcon.png)  

The **Menu** options screen slides into display.

Note: To close the Menu options screen, click the **X** button... or click on the underlying screen.  

----

### Menu Options

![](../static/img/docs/LAUNCH/image12.png)  

The **Home** button will take you back to the initial landing screen.  

![](../static/img/docs/LAUNCH/but_home.png)  

----

The **Help** button will open the **Online Help** document in your internet browser.

![](../static/img/docs/LAUNCH/but_help.png)  

----

The **Exit** button will close the Sense-i Launcher application.

![](../static/img/docs/LAUNCH/but_exit.png)  

----

The **Tools** button will open **additional options** on the Menu.

![](../static/img/docs/LAUNCH/image13.png)  

----

### Manage Connections

![](../static/img/docs/LAUNCH/but_load.png)  

The **Load** button will open the **Load Connection** screen.  


See the section **Load Connection** above for details on how to load connections 
from .INI files, e-mails and relevant text files.  

----
![](../static/img/docs/LAUNCH/but_config.png)  

The **Configure** button will open the **Configure Connections** screen.  

![](../static/img/docs/LAUNCH/image29.png)  

:::tip Configure Connections - SQL database Adminstrators
The **Configure Connections** screen is for SQL Database Adminstrators that 
have access to the specific configuration settings.
:::  

The [ **Add** ] button activates the connection settings fields to enable and add 
a new connection.

1.	**Connection Name** - Capture the desired name (description).
	It is recommended practise to use a consistent format that includes **company name**, 
	database type **(LIVE / TEST)** and the connection method (**Remote / LAN**),  
	e.g. **Acme_LIVE (Remote Connect)**.
	
2.	**Server Name** - This field includes the server **IP**, the **SQL Server Instance** and 
	the incoming **SQL port** used.  
	The syntax is important and needs to be accurate.  
	
3.	**Database Name** - This too needs to reflect the exact name of the database.  

4.	**SQL Login Name** - This is the general login setting used by all SEMS users that 
	access the specific database.  

5.	**SQL Password** - The password associated with the SQL Login Name.  

6.	**SA Password** - This password field is **optional** and only known and used by 
	Database System Administrators.  

:::note
The SQL Login Name and Passwords are defined, captured and maintained by Database System 
Administrators using SQL Server Management software.
:::  

![](../static/img/docs/LAUNCH/image34.png)  

Click on the [ **Test** ] button to ensure the connection settings have been configured correctly.  

Once the connection setting(s) have been captured and saved using the [ **Save** ] button,  
the [ **Edit** ], [ **Delete** ] and [ **Copy** ] button options are activated for 
further amendments and to configure additional connections as neccessary.  

![](../static/img/docs/LAUNCH/image35.png)  

Click on the [ **Export** ] button to create the relevant **.ini** file that can be distributed to 
SEMS users.  

:::note
The **Export** button will append additional connection settings to an existing **.ini** 
file if selected.  
:::

Access the **Menu** by selecting the menu icon near the top left corner of the Sense-i Launcher application.

![](../static/img/docs/LAUNCH/menuIcon.png)  

----

### Launch (specific) Application  

The **SEMS toggle button** is set to active by default.  

![](../static/img/docs/LAUNCH/image33.png)  

1.	When the **SEMS toggle button** is active, clicking on the [ **Connect** ] button 
(underlying **Home Page**) will launch the SEMS application.  

2.	Click on the [ **Factory Floor** ] toggle button to activate the **Sphere_Mini** application.  
	Then click on the [ **Connect** ] button (underlying **Home Page**).  
	
3.	Click on the [ **Administrator** ] toggle button to activate the **System_Administrator** application.  
	Then click on the [ **Connect** ] button (underlying **Home Page**).  

----









