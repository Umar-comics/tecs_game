# Here are some cool Windows cmd tricks.

# You can access IP addresses on your network like this
arp -a

# Then you can shutdown/restart that computer like
shutdown -i

# Send a message to everyone in your network like:
msg * YOUR_MESSAGE

# Encrypt your C: like:
cipher/E

# This is very cool: you know how, when you login, you see a screen?
# That screen isn't a browser, and ypu see shortcuts to some of 
# your files somewhere on the screen. You can hide and reshow a file like:

attrib +h +s +r FILE_NAME
# change the pluses to minuses and reshow the file:
attrib -h -s -r FILE_NAME

# You can find out all the info about a website like:
nslookup your-website.net
